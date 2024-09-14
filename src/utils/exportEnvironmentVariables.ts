import { test } from '@playwright/test';

export function isMobile(): boolean {
  const { isMobile } = test.info().project.use;
  return isMobile ?? false; // Fallback to `false` if `isMobile` is `undefined`
}

export function isLoggerEnabled(): boolean {
  return process.env.IS_LOGGER_ENABLED === 'true' || false;
}

export function isRunningOnMobile(): boolean {
  return process.env.IS_RUNNING_ON_MOBILE === 'true' || false;
}
