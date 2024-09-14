import { test } from '@playwright/test';
import { EnvConfig } from 'src/types/env';

/**
 * Determines if the code is running on a mobile device.
 *
 * @return {boolean} A boolean indicating whether the code is running on a mobile device.
 */
export function isMobile(): boolean {
  const { isMobile } = test.info().project.use;
  return isMobile ?? false; // Fallback to `false` if `isMobile` is `undefined`
}

/**
 * Retrieves the environment configuration.
 *
 * @return {EnvConfig} An object containing the environment configuration values.
 * The object has the following properties:
 * - IS_LOGGER_ENABLED: A boolean indicating whether the logger is enabled. Defaults to 'false' if not set.
 * - IS_RUNNING_ON_MOBILE: A boolean indicating whether the code is running on a mobile device. Defaults to 'false' if not set.
 * - Add more environment variables as needed.
 */
export function getEnvConfig(): EnvConfig {
  return {
    IS_LOGGER_ENABLED: process.env.IS_LOGGER_ENABLED || 'false',
    IS_RUNNING_ON_MOBILE: process.env.IS_RUNNING_ON_MOBILE || 'false',
    // Add more environment variables as needed
  };
}
