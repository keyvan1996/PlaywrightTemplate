import { Locator, Page, expect } from '@playwright/test';
import logger from '../../utils/logger';

export class LoginPage {
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.usernameField = page.locator('input[placeholder="Username"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('input#login-button')

}
async login() {
    logger.info(`[${this.login.name}] - entering user info to login`)
    this.usernameField.fill('standard_user')
    this.passwordField.fill('secret_sauce')
    this.loginButton.click()
}
}