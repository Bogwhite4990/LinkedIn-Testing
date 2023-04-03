# LinkedIn-Testing

This repository contains automated tests for the LinkedIn website, using the Cypress testing framework.

## Prerequisites
Node.js installed on your machine.

## Getting Started

1. Clone the repository.
2. Install the Cypress dependencies by running the following command in the terminal: **npm install**
3. Open Cypress using the following command: **npm run cy:open**
4. The Cypress Test Runner will open, and you can select the test file (**linkedin.spec.js**) to run the tests.

## Test Descriptions
**Login Functionality Test**: This test verifies the login functionality of LinkedIn by entering the correct login credentials and ensuring that the user is successfully logged in.
**Logout Functionality Test**: This test logs in and logs out successfully, by clicking on the user's profile dropdown menu and selecting the "Sign Out" option.
**Profile Editing and Saving Functionality Test**: This test verifies the functionality of editing and saving user's profile information, by clicking on the user's profile dropdown menu and selecting the "View profile" option, then clicking on the "Edit" button and updating the first name and last name fields.
**Search Functionality Test**: This test verifies the search functionality of LinkedIn by searching for a connection by name and verifying the buttons on the page.

## Test Data
The following test data is used in the tests:

**username_email**: The email address of the user used for login.
**password_pwd**: The password of the user used for login.
**first_name**: The updated first name for the user's profile information.
**last_name**: The updated last name for the user's profile information.
