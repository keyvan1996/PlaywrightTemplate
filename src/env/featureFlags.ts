import { FeatureFlags } from 'src/types/featureFlags';
import { client } from '@env/featureFlagsConfig';

// Ensure the feature flags match the FeatureFlags interface
export const featureFlags: { [key: string]: FeatureFlags } = {
  test: {
    featureX: false,
    featureY: false,
    loginFeature: false,
  },
  prod: {
    featureX: false,
    featureY: false,
    loginFeature: false,
  },
};

// Fetch all feature flags from PostHog
export async function getAllFlagsFromPostHog(env: string) {
  try {
    const flags = await client.getAllFlags('kjskjfhksj');
    return flags;
  } catch (error) {
    console.error('Error fetching flags from PostHog:', error);
    return featureFlags[env as keyof typeof featureFlags] || featureFlags['prod']; // Default to 'prod' if fetch fails
  }
}

/**
 * Retrieves and merges feature flags from PostHog with local defaults for a given environment.
 * If PostHog is missing any flags defined in the FeatureFlags interface, it falls back to local defaults.
 *
 * @param {string} env - The environment for which to retrieve feature flags.
 * @return {Promise<FeatureFlags>} The feature flags for the specified environment, with fallback values as necessary.
 */
export async function getFeatureFlags(env: string): Promise<FeatureFlags> {
  const localFlags = featureFlags[env as keyof typeof featureFlags] || featureFlags['prod'];
  const postHogFlags = await getAllFlagsFromPostHog(env);
  // Merge PostHog flags with local flags, defaulting to local values if PostHog flags are incomplete
  console.log('featureFlags: ', { ...localFlags, ...postHogFlags });
  return { ...localFlags, ...postHogFlags };
}
