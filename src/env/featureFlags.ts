import { FeatureFlags } from 'src/types/featureFlags';

// Ensure the feature flags match the FeatureFlags interface
export const featureFlags: { [key: string]: FeatureFlags } = {
  test: {
    featureX: false,
    featureY: false,
  },
  prod: {
    featureX: false,
    featureY: false,
  },
};

/**
 * Retrieves the feature flags for a given environment.
 *
 * @param {string} env - The environment for which to retrieve feature flags.
 * @return {FeatureFlags} The feature flags for the specified environment, defaulting to 'prod' if not found.
 */
export function getFeatureFlags(env: string): FeatureFlags {
  return featureFlags[env as keyof typeof featureFlags] || featureFlags['prod']; // Default to 'prod' if env not found
}
