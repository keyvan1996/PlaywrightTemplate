import { Locator, Page, expect } from "@playwright/test";
import logger from "../utils/logger";
import * as dataLogin from '../data/login.json'

export class LoginPage {
  private page: Page
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('input[placeholder="Username"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator("input#login-button");
  }

  async login() {
    const {username, password} = dataLogin.validUser
    logger.info(`method: [${this.login.name}] - trying to login with username: ${username}`)
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    logger.info(`method: [${this.login.name}] - finished!`);
  }
}
