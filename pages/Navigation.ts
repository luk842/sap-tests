
import { Page, Locator, expect } from '@playwright/test';

export class Navigation {
  constructor(private page: Page) {}

  get productsButton() {
    return this.page.getByRole('button', { name: 'Products' });
  }

  get financeEsgMenu() {
    return this.page.locator('button:has(span:text("Finance & ESG"))');
  }

  get esgKpiEngineLink() {
    return this.page.getByRole('link', { name: 'ESG KPI Engine' });
  }

  async openProductsMenu() {
    await this.productsButton.click();
  }

  async clickFinanceEsg() {
    await this.financeEsgMenu.click();
  }

  async clickEsgKpiEngine() {
    await this.esgKpiEngineLink.click();
  }

  async verifyEsgKpiEngineUrl() {
    await expect(this.page).toHaveURL(/.*esg-kpi-engine/);
  }
}
