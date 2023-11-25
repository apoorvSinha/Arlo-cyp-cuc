import HomePage from "../../e2e/pages/HomePage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homepage = new HomePage()

before(function(){
  cy.visit('https://ring.com/')
})

Given("user has navigated to the correct url", function () {
    homepage.getUrl().should('eq', 'https://ring.com/')
});


Then('user verifies the navbar available options', function () {
    if(homepage.checkHamburgerMenu() == false){
      homepage.getBusinessSolutionBtn().should('be.visible')
      homepage.getCommunityBtn().should('be.visible')
      homepage.getProductBtn().should('be.visible')
      homepage.getProtectPlanBtn().should('be.visible')
      homepage.getServicesBtn().should('be.visible')
    }else{
      cy.log('returned true')
    }
})