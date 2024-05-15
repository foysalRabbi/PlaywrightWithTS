
import { test } from "../fixtures/base.fixture";
import ENV from "../utils/env";

test.describe('User able to login' , async () => {
    test('Customer able to login using valid credentials', async({page,registrationPage }) => {
        
        await test.step('Go to url',async() =>{
            //await registrationPage.gotoURL();
            await page.goto(ENV.BASE_URL);
        });
       
        await test.step('', async () => {
           // await registrationPage.();
        });

    });

} );