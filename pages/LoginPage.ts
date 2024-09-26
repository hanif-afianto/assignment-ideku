import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: string;
  readonly passwordInput: string;
  readonly loginButton: string;

  constructor(page: Page) {
    this.page = page;
    // Define selectors using CSS selectors
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  // Perform login action
  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}
