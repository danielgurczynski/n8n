import type { FrontendSettings } from '@n8n/api-types';

import { createDefaultFrontendSettings } from '@/constants/frontendDefaults';

const settings = createDefaultFrontendSettings();

settings.endpointForm = '';
settings.endpointFormTest = '';
settings.endpointFormWaiting = '';
settings.endpointMcp = '';
settings.endpointMcpTest = '';
settings.endpointWebhook = '';
settings.endpointWebhookTest = '';
settings.endpointWebhookWaiting = '';
settings.urlBaseEditor = '';
settings.urlBaseWebhook = '';

export const defaultSettings: FrontendSettings = settings;

export { createDefaultFrontendSettings };
