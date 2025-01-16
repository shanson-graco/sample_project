//very basic tests, going over the village homepage
const { test, expect } = require('@playwright/test');
const { VillageDashboardPage } = require('../page/VillageDashboardPage');

let villageDashboardPage;

test.beforeEach('Open Village Dashboard', async ({page}) => {
    villageDashboardPage = new VillageDashboardPage(page)
    await villageDashboardPage.goto();
});

test('check title', async ({page}) => {
    // expect a title element that includes 'Graco'. Should actually be 'Home | The Graco Village'
    await expect(page).toHaveTitle(/Graco/);
});

test('find the date in the page', async ({page}) => {
    // there is an element within the page-content div that has an id='todaysDateDiv'
    const locator = page.locator('#todaysDateDiv');
    await expect(locator).toBeVisible();
});

test('Enter search term', async ({page}) => {
    // enter the term 'lotus notes' into the search bar, click 'Search'
    await page.getByPlaceholder('Enter what (or who) to search').fill('lotus notes');
    await page.getByRole('button', {name: 'Go'}).click();
    await page.screenshot({path: 'searchScreenshot.png'});
});

test('validate 100 year countdown element', async ({page}) => {
    // there is an element on the homepage that has the 100 year countdown clock in it
    const locator = page.locator('#graco-timer');
    await expect(locator).toBeVisible();
});

