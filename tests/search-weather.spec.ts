import { test, expect } from '@playwright/test';
import { readFileCsv } from '../utils/common.spec';
import { city_file, title, text_on_homepage, locators } from '../utils/const.spec';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('home page has title', async ({ page }) => {
    await expect(page).toHaveTitle(title);
});

test.describe('Search Weather In Your City', async () => {
    test('should contain text on the home page', async ({ page }) => {
        const locator = page.locator(locators.white_text_home_page);
        await expect(locator).toContainText(text_on_homepage)
    });

    for (const cityFile of readFileCsv(city_file)) {
        test(`${cityFile.search_case}`, async ({ page }) => {
            await page.locator(locators.desktop_menu).getByPlaceholder(locators.get_placeholder).fill(cityFile.city);
            await page.keyboard.press("Enter");
            await expect(page.getByText(cityFile.text_contain)).toBeVisible();
        });
    }
});

test.afterEach(async ({ page }) => {
    await page.close();
});
