Feature: Verification of the nav bar and available option for the neighbour when visitng the page forst time

    Scenario: User landing on hope page first time
    Given user has navigated to the correct url
    Then user verifies the navbar available options
    When user hovers over the Products page
    Then user can can see a list of cameras available to buy
    When user hover over the Indoor cams 
    Then user can can see a list of Indoor cameras available to buy
    