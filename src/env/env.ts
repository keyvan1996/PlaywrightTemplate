import { test } from '@playwright/test';
import { getFeatureFlags } from './featureFlags';
import { FeatureFlags } from 'src/types/featureFlags';

/**
 * Extracts the environment name from the project name.
 *
 * @return {{ env: string }} An object containing the environment name.
 */
function parseProjectName(): { env: string } {
  const projectName = test.info().project.name;
  // Extract values from project name
  const env = projectName.match(/^Test|Prod/i)?.[0] || 'unknown';
  return { env };
}

/**
 * Returns the environment name based on the project name.
 *
 * @return {string} The environment name (e.g., 'test' or 'prod')
 */
export function getEnv(): string {
  const env = parseProjectName().env.toLowerCase();
  return env;
}

/**
 * Returns the base URL based on the current environment.
 * @return {string} The base URL for the current environment.
 */
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
  return baseUrl;
}

/**
 * Returns the current feature flags based on the environment.
 *
 * @return {FeatureFlags} The current feature flags
 */
export function getCurrentFeatureFlags(): FeatureFlags {
  const env = getEnv();
  const flags = getFeatureFlags(env);
  return flags; // No need to cast anymore
}
