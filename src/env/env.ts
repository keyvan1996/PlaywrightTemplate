import { test } from '@playwright/test';
import { getFeatureFlags } from './featureFlags';
import { FeatureFlags } from 'src/types/featureFlags';

// Function to parse the project name and extract env, department, and brand
function parseProjectName(): { env: string } {
  const projectName = test.info().project.name; // Get the project name (e.g., 'QaPartsChevrolet')

  // Extract values from project name
  const env = projectName.match(/^Test|Prod/i)?.[0] || 'unknown';
  return { env };
}

// Function to return environment
export function getEnv(): string {
  const env = parseProjectName().env.toLowerCase();
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
  return baseUrl;
}

// getCurrentFeatureFlags function returning a valid FeatureFlags object
export function getCurrentFeatureFlags(): FeatureFlags {
  const env = getEnv();
  const flags = getFeatureFlags(env);
  return flags; // No need to cast anymore
}
