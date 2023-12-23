Feature: Verification of the login functionality with an account
Scenario: User is able to navigate to the home page and able to login with existing credentials.

Given user has navigated to the correct url
When user clicks the login button and is navigated to next page
Then user enters the credentials
Then user verifies the login has been successful