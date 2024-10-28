import { getEnvConfig } from '@utils/exportEnvironmentVariables';
import { PostHog } from 'posthog-node';

export const client = new PostHog(getEnvConfig().POST_HOG_TOKEN, { host: 'https://us.i.posthog.com' });
