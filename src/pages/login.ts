import { Locator, Page } from '@playwright/test';
import logger from '@utils/logger';
import { isMobile } from '@utils/exportEnvironmentVariables';

export class LoginPage {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('input[placeholder="Username"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('input#login-button');
  }

  /**
   * Attempts to log in to the application using the provided credentials.
   *
   * @param {string} username - The username to use for logging in.
   * @param {string} password - The password to use for logging in.
   * @return {Promise<void>} A promise that resolves when the login process is complete.
   */
  async login(username: string, password: string) {
    logger.info(`method: [${this.login.name}] - isMobile: ${isMobile()}`); // example of using isMobile in pages files
    logger.info(`method: [${this.login.name}] - trying to login with username: ${username}`);
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    logger.info(`method: [${this.login.name}] - finished!`);
  }
}
