Feature: verifies protect plans from the home page accessible to new customers

Scenario: User landing on home page and navigates to protect plans
Given user has navigated to the correct url
When user is able to hover over the Protect plan tab
Then user should be able to verify available options
