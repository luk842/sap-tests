
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Navigation } from '../pages/Navigation';
import { ContactPage } from '../pages/ContactPage';

test.describe('SAP Fioneer Website - Homepage', () => {
  test('Test 1: Verify End-to-end solutions section', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();

    await home.verifySolutionSectionVisible();

    const titles = await home.getTrimmedCardTitles();
    expect(titles).toHaveLength(3);
    expect(titles).toEqual(['Banking', 'Insurance', 'Finance & ESG']);

    await home.clickFirstLearnMore();
    await expect(page).toHaveURL(/banking/);
  });

  test('Test 2: Navigate to ESG KPI Engine from Finance & ESG menu', async ({ page }) => {
    const home = new HomePage(page);
    const nav = new Navigation(page);
    await home.goto();

    await nav.openProductsMenu();
    await nav.clickFinanceEsg();
    await nav.clickEsgKpiEngine();
    await nav.verifyEsgKpiEngineUrl();
  });

  test('Test 3: Validate incorrect email input in contact form', async ({ page }) => {
    const home = new HomePage(page);
    const contact = new ContactPage(page);
    await home.goto();

    await home.clickGetInTouch();
    await contact.verifyOnContactPage();

    await contact.fillInvalidEmail('342323');
    await contact.expectValidationError();
  });
});
