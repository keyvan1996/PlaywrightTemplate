import { Locator, Page, expect } from "@playwright/test";
import logger from "../../utils/logger";

export class LoginPage {
  private usernameField: Locator;
  private passwordField: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.usernameField = page.locator('input[placeholder="Username"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator("input#login-button");
  }
  async login() {
    logger.info(`[${this.login.name}] - entering user info to login`);
    await this.usernameField.fill("standard_user");
    await this.passwordField.fill("secret_sauce");
    await this.loginButton.click();
  }
}
