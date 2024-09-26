# **OrangeHRM Login Automation with Playwright (POM Structure)**

## **Overview**

This repository contains an automation script for logging into the OrangeHRM demo site using Playwright. The Page Object Model (POM) design pattern is implemented to organize and maintain the test code efficiently. This structure allows you to reuse page objects and manage changes to the UI with minimal impact on the test cases.

## **Technologies Used**

- **Playwright**: A Node.js library to automate Chromium, Firefox, and WebKit browsers with a single API.
- **TypeScript**: Strongly-typed JavaScript for more scalable and maintainable code.
- **POM (Page Object Model)**: A design pattern to improve code reusability and readability.

## **Project Structure**

```bash
pom-playwright-orangehrm/
├── pages/                # Contains page object files
│   ├── LoginPage.ts       # Login page object
├── tests/                # Contains test files
│   ├── login.test.ts      # Login test file
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project instructions
```

## **Pre-requisites**

Before you can run this project, ensure you have the following installed:

1. **Node.js** (v16+)
   - [Download Node.js](https://nodejs.org/)
2. **Playwright** (Installed via npm)

## **Installation Instructions**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/hanif-afianto/ideku-TechnicalTest.git
   cd ideku-TechnicalTest
   ```

2. **Install Dependencies**

   Run the following command to install all required dependencies (Playwright and TypeScript):

   ```bash
   npm install
   ```

3. **Install Playwright Browsers**

   Install the browsers required for Playwright:

   ```bash
   npx playwright install
   ```

## **Test Details**

The project automates the login process for the **OrangeHRM demo** site using the following valid credentials:

- **Username**: Admin
- **Password**: admin123

The test will:
- Navigate to the login page.
- Input valid credentials.
- Verify a successful login by checking the URL or another indicator post-login (adjust assertions as necessary based on the actual page behavior).

## **How to Run Tests**

1. **Run All Tests**

   To execute all tests, run:

   ```bash
   npx playwright test
   ```

2. **Run Tests in Headless Mode**

   By default, Playwright runs in headful mode (with browser UI). To run in headless mode, modify the configuration in `playwright.config.ts` or pass the `--headless` flag:

   ```bash
   npx playwright test --headless
   ```

3. **Run a Specific Test**

   You can also run a specific test by specifying the test file path:

   ```bash
   npx playwright test tests/login.test.ts
   ```

4. **View Test Report**

   After running the tests, a Playwright report is generated. You can view it by running:

   ```bash
   npx playwright show-report
   ```

## **Configurations**

The `playwright.config.ts` file is where you can configure various settings like the browser to run the tests on, viewports, and timeouts. Below are a few common configuration options you can customize:

- **Headless Mode**: Run tests in a headless browser (`true`) or with UI (`false`).
- **Base URL**: Set the base URL for the OrangeHRM application.
- **Viewport Size**: Define the size of the browser window.
- **Timeouts**: Configure default timeouts for each test.

## **Code Explanation**

1. **Page Object (POM)**
   - The `LoginPage.ts` contains the locators and methods related to the login page of OrangeHRM.
   - It separates concerns so that the actual test logic is clean and easy to read.

2. **Test**
   - The `login.test.ts` file defines the test scenario, which includes the login flow and assertions to check if the login was successful.

3. **Assertions**
   - We verify the test outcome using assertions like `expect(page).toHaveURL(/dashboard/)` to ensure the login was successful.

## **Conclusion**

This repository demonstrates how to automate login functionality for a web application using Playwright and the POM design pattern. The structure is scalable and easy to extend for other parts of the OrangeHRM platform, such as employee management, leave requests, etc.

---

## **Contributions**

Feel free to open a pull request or an issue if you'd like to contribute or if you find any issues!

---

## **Author**

- [Hanif Afianto Dwi Nugroho](https://github.com/hanif-afianto)

---

This README file is designed to give a complete guide to your project, including setup, running tests, and contributing.
