
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Navigation } from '../pages/Navigation';
import { ContactPage } from '../pages/ContactPage';
import { initializePages } from '../helpers/testSetup';

let home: HomePage;
let nav: Navigation;
let contact: ContactPage;

test.describe('SAP Fioneer Website - Homepage', () => {
  test.beforeEach(async ({ page }) => {
    const pages = await initializePages(page);
    home = pages.home;
    nav = pages.nav;
    contact = pages.contact;
  });

  test('Test 1: Verify End-to-end solutions section', async ({ page }) => {
   await expect(home.solutionSection).toBeVisible();

    const titles = await home.getTrimmedCardTitles();
    expect(titles).toHaveLength(3);
    expect(titles).toEqual(['Banking', 'Insurance', 'Finance & ESG']);

    await home.clickFirstLearnMore();
    await expect(page).toHaveURL(/banking/);
  });

  test('Test 2: Navigate to ESG KPI Engine from Finance & ESG menu', async ({ page }) => {
    await nav.openProductsMenu();
    await nav.clickFinanceEsg();
    await nav.clickEsgKpiEngine();
    await expect(page).toHaveURL(/.*esg-kpi-engine/);
  });

  test('Test 3: Validate incorrect email input in contact form', async ({ page }) => {
    await home.clickGetInTouch();
    await expect(page).toHaveURL(/.*contact.*/i);

    await contact.fillInvalidEmail('342323');
    await expect(contact.emailError).toBeVisible();
  });
});
