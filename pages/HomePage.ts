
import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  get solutionSection() {
    return this.page.getByRole('heading', {
      name: 'End-to-end solutions for financial services',
    });
  }

  get cardTitles() {
    return this.page.locator('article.cards-block a h3');
  }

  get firstLearnMoreLink() {
    return this.page.locator('article.cards-block a').first();
  }

  get getInTouchLink() {
    return this.page.getByRole('link', { name: 'Get in touch' }).first();
  }

  async goto() {
    await this.page.goto('/');
  }

  async getTrimmedCardTitles(): Promise<string[]> {
    const titles = await this.cardTitles.allTextContents();
    return titles.slice(0, 3).map(t => t.trim());
  }

  async clickFirstLearnMore() {
    await this.firstLearnMoreLink.click();
  }

  async clickGetInTouch() {
    await this.getInTouchLink.click();
  }
}
