import { test } from '@playwright/test';
import { EnvConfig } from 'src/types/env';

export function isMobile(): boolean {
  const { isMobile } = test.info().project.use;
  return isMobile ?? false; // Fallback to `false` if `isMobile` is `undefined`
}

export function getEnvConfig(): EnvConfig {
  return {
    IS_LOGGER_ENABLED: process.env.IS_LOGGER_ENABLED || 'false',
    IS_RUNNING_ON_MOBILE: process.env.IS_RUNNING_ON_MOBILE || 'false',
    // Add more environment variables as needed
  };
}
