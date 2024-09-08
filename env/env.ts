import { test } from '@playwright/test';
import logger from '../utils/logger';
import { getFeatureFlags } from './featureFlags';

// Function to parse the project name and extract env, department, and brand
function parseProjectName(): { env: string} {
  const projectName = test.info().project.name; // Get the project name (e.g., 'QaPartsChevrolet')

  // Extract values from project name
  const env = projectName.match(/^Test|Prod/i)?.[0] || 'unknown';

  logger.info(`Parsed project name: ${projectName}`);
  logger.info(`Environment: ${env}`);

  return { env};
}

// Function to return environment
export function getEnv(): string {
  const env = parseProjectName().env.toLowerCase();
  logger.info(`Environment fetched: ${env}`);
  return env;
}

// Build the base URL using the extracted values
export function getBaseUrl(): string {
    const env = getEnv();
    let baseUrl: string;
  
    switch (env) {
      case 'prod':
        baseUrl = `https://www.saucedemo.com`;
        break;
      case 'test':
        baseUrl = `https://www.saucedemo.com`;
        break;
      default:
        throw new Error(`Unknown environment: ${env}`);
    }
  
    logger.info(`[${getBaseUrl.name}] - Base URL generated: ${baseUrl}`);
    return baseUrl;
  }

// Function to get feature flags for the current environment
export function getCurrentFeatureFlags(): { [key: string]: boolean } {
  const env = getEnv();
  const flags = getFeatureFlags(env);
  logger.info(`Feature flags for ${env}: ${JSON.stringify(flags)}`);
  return flags;
}