import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('validate user can login', async ({ page }) => {
    const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login()
});
