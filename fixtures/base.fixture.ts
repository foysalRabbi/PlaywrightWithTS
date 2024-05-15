import { test as base, Page } from "@playwright/test";
import RegistrationPage from "../pages/registration.page";
import LoginPage from "../pages/home.login.page";


type pages = {
  registrationPage: RegistrationPage;
  loginPage: LoginPage;

};

const testPages = base.extend<pages>({

    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page));
      },
    
    loginPage: async ({page}, use) => {
      await use(new LoginPage(page));
    }

});

export const test = testPages;
export const expect = testPages.expect;
