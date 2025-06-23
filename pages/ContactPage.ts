
import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  constructor(private page: Page) {}

  get emailInput() {
    return this.page.locator('input[name="email"]');
  }

  get emailError() {
    return this.page.locator('label', {
      hasText: 'Email must be formatted correctly.',
    });
  }

  async verifyOnContactPage() {
    await expect(this.page).toHaveURL(/.*contact.*/i);
  }

  async fillInvalidEmail(value: string) {
    await this.emailInput.fill(value);
    await this.emailInput.blur();
  }

  async expectValidationError() {
    await expect(this.emailError).toBeVisible();
  }
}
