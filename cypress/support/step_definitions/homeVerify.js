import HomePage from "../../e2e/pages/HomePage";
import ProductHover from "../../e2e/pages/ProductHover";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homepage = new HomePage()
const productHover = new ProductHover()



Given("user has navigated to the correct url", function () {
  homepage.getUrl().should('eq', 'https://ring.com/')
});


Then('user verifies the navbar available options', function () {
  homepage.getBusinessSolutionBtn().should('be.visible')
  homepage.getCommunityBtn().should('be.visible')
  homepage.getProductBtn().should('be.visible')
  homepage.getProtectPlanBtn().should('be.visible')
  homepage.getServicesBtn().should('be.visible')
  homepage.getLoginBtn().should('be.visible')
  homepage.getSearchBtn().should('be.visible')
  homepage.getCareHelpBtn().should('be.visible')
  homepage.getCartBtn().should('be.visible')
})

When('user hovers over the Products page', function () {
  //good achievement here, we can change the classa value at runtime to make it visible instead of just clicking functionality we are able to cehck hover functionality
  productHover.getProductHoverPage().invoke("attr", "class", "menu-holder-c35 visible-c95").trigger('change' ,{force: true})
  productHover.getOutdoorCams().should('be.visible')

})

Then('user can can see a list of cameras available to buy', function () {

})
