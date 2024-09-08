export const featureFlags = {
    test: {
      featureX: true,  // Enable feature X in development
      featureY: false, // Disable feature Y in development
    },
    prod: {
      featureX: false, // Disable feature X in production
      featureY: false, // Disable feature Y in production
    },
  };
  
  export function getFeatureFlags(env: string): { [key: string]: boolean } {
    return featureFlags[env] || featureFlags['prod']; // Default to 'prod' if env not found
  }