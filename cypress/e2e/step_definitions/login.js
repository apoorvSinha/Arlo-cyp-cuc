import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CreateAccount from "../../support/pages/CreateAccount";
const createAcc = new CreateAccount()

When("user clicks the login button and is navigated to next page", function(){
    createAcc.getLogIn().click();
})

Then("user enters the credentials", function(){
    createAcc.getDisabledLoginButton().should('be.disabled')
    const loginConfirm = createAcc.getLoginConfirmationHeading()
    createAcc.getConfirmation(loginConfirm)
    createAcc.getEmailButton().type(String(Cypress.env('email')))
    createAcc.getDisabledLoginButton().should('be.enabled')
    createAcc.getDisabledLoginButton().click()
    createAcc.getPasswordLabel().should('be.visible')
    createAcc.getShowPasswordButtonVisibility().should('be.visible')
    createAcc.getPasswordInput().type(String(Cypress.env('password')))
    createAcc.getLoginButtonAfterEnteringCredentials().click()
})

Then("user verifies the login has been successful", function(){

})