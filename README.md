# oolio-qa
## Playwright Framework
Playwright is a framework for Automation Testing. It is built to enable cross browser, reliable end-to-end testing for web apps.

## How to start

1. Clone source from github
2. Run "npm i" for installing all the dependencies
3. Run "npx playwright test" to execute the tests
4. Run "npx playwright show-report" to open the report
5. In This framework i have integrated Allure HTML Reporting with Playwright
   To generate Allure HTML Reports
   - Run "npm run playwright" command to execute the tests
   - Run "npm run allure:generate" to open the Allure HTML Reports

## In This Framework

### tests package: Where is stored the test scripts
### data package: Where is stored the test data as csv file, json file
### untils package: Where is stored the common classes, functions, constants, locators
### .env file: Where is to defind the environment and configurations. I have configured running parallel on multi threads & workers in this file.
### playwright.config.ts: Where is to define the configurations framework
   - TimeOut
   - Record Video
   - Take Screenshot
   - BaseURL
   - Cross Browser
   - 4 Threds
   - 5 times for Retries
### test-results: Where is stored the results of test as screenshot, video recorded
### playwright-report: Where is stored the simple report of Playwright
### allure-report: Where is stored the Allure HTML Reports


