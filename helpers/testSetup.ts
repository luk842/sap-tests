import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Navigation } from '../pages/Navigation';
import { ContactPage } from '../pages/ContactPage';

export async function initializePages(page: Page) {
  const home = new HomePage(page);
  const nav = new Navigation(page);
  const contact = new ContactPage(page);
  await home.goto();

  return { home, nav, contact };
}
