
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'https://www.sapfioneer.com/',
  },
  reporter: [['html', { open: 'never' }]],
});
