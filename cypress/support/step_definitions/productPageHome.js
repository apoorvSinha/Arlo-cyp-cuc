import HomePage from "../../e2e/pages/HomePage";
import ProductHover from "../../e2e/pages/ProductHover";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const homepage = new HomePage()
const productHover = new ProductHover()


Given("user is able to hover over the Protect plan tab", function () {
    cy.log('we are here to celebrate')
})
