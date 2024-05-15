import { Page } from "@playwright/test";

export default class RegistrationPage{

    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async gotoURL() {
        await this.page.goto('https://playwright.dev/')
    }

}