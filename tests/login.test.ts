import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('OrangeHRM Login Tests', () => {
  let loginPage: LoginPage;

  // Before each test, instantiate the LoginPage and navigate to the login page
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Perform login using the credentials from the image
    await loginPage.login('Admin', 'admin123');

    // Check if the user is redirected to the dashboard or some other page
    await expect(page).toHaveURL(/dashboard/); // Adjust according to the actual URL post-login
  });
});
