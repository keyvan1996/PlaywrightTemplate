export const featureFlags = {
  test: {
    featureX: false,
    featureY: false,
  },
  prod: {
    featureX: false,
    featureY: false,
  },
};

export function getFeatureFlags(env: string): { [key: string]: boolean } {
  return featureFlags[env] || featureFlags['prod']; // Default to 'prod' if env not found
}
