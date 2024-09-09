import winston from 'winston';
// Uncomment the following if you need file logging
// import path from "path";
import moment from 'moment-timezone';
import { test } from '@playwright/test';

const IS_LOGGER_ENABLED = process.env.IS_LOGGER_ENABLED === 'true';
let logger: winston.Logger;

if (IS_LOGGER_ENABLED) {
  // Uncomment the following if you need file logging
  // const currentDir = __dirname;
  // const srcDir = path.resolve(currentDir, "..");
  // const loggingDir = path.resolve(srcDir, "logs");

  const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    const testInfo = test.info();
    const testTitle = testInfo.title || '';
    const testCaseIdMatch = testTitle.match(/\[(\d+)\]/);
    const logTitle = testCaseIdMatch ? `[${testCaseIdMatch[1]}]` : `[${testTitle}]`;
    let colorCode;
    switch (level) {
      case 'info':
        colorCode = '\x1b[32m'; // Green
        break;
      case 'warn':
        colorCode = '\x1b[33m'; // Yellow
        break;
      case 'error':
        colorCode = '\x1b[31m'; // Red
        break;
      case 'debug':
        colorCode = '\x1b[34m'; // Blue
        break;
      default:
        colorCode = '\x1b[37m'; // White
        break;
    }

    return `${colorCode}${timestamp} [${level}] ${logTitle}: ${message}\x1b[0m`;
  });

  const timeZone = 'America/New_York';

  logger = winston.createLogger({
    format: winston.format.combine(winston.format.timestamp({ format: () => moment().tz(timeZone).format() }), customFormat),
    transports: [
      new winston.transports.Console(),
      // Uncomment the following transports if you need file logging
      // new winston.transports.File({
      //   filename: path.join(loggingDir, "test_run.log"),
      //   maxFiles: 5,
      //   maxsize: 300 * 1024,
      //   level: "info",
      // }),
      // new winston.transports.File({
      //   filename: path.join(loggingDir, "test_error.log"),
      //   maxFiles: 5,
      //   maxsize: 10 * 1024,
      //   level: "error",
      // }),
    ],
  });
} else {
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'silent', // Use 'silent' to ensure no output
      }),
    ],
  });
}

export default logger;