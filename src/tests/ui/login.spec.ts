import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/login';
import { getBaseUrl, getCurrentFeatureFlags } from '@env/env';
import logger from '@utils/logger';

test('validate user can login', async ({ page, isMobile }) => {
  logger.info(`isMobile: ${isMobile}`); // example of using isMobile in a test file
  const loginPage = new LoginPage(page);
  await page.goto(getBaseUrl());
  await loginPage.login();
  if (getCurrentFeatureFlags().featureX) {
    await expect(page).toHaveURL(`${getBaseUrl()}/inventory`);
  } else {
    await expect(page).toHaveURL(`${getBaseUrl()}/inventory.html`);
  }
});
