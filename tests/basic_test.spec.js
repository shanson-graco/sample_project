//very basic tests, going over the village homepage
const { test, expect } = require('@playwright/test');

test('check title', async ({page}) => {
    await page.goto('https://village.graco.com/content/village/corporate.html');

    // expect a title element that includes 'Graco'. Should actually be 'Home | The Graco Village'
    await expect(page).toHaveTitle(/Graco/);
});

test('find the date in the page', async ({page}) => {
    await page.goto('https://village.graco.com/content/village/corporate.html');

    // there is an element within the page-content div that has an id='todaysDateDiv'
    const locator = page.locator('#todaysDateDiv');
    await expect(locator).toBeVisible();
});