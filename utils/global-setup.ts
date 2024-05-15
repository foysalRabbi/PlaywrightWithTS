import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

async function globalSetup(config: FullConfig) {

  const test_env = "uat";

  if (test_env) {
    dotenv.config({
      path: `env/${test_env}.env`,
      //path: path.resolve(__dirname, '..', 'my.env') }
      override: true,
    });
  }
}
export default globalSetup;