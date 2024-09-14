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

// Updated getFeatureFlags to return an object of type FeatureFlags
export function getFeatureFlags(env: string): FeatureFlags {
  return featureFlags[env as keyof typeof featureFlags] || featureFlags['prod']; // Default to 'prod' if env not found
}
