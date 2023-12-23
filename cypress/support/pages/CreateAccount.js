class CreateAccount{
    getLogIn(){
        return cy.get("[aria-label*='Log']")
    }
    getDisabledLoginButton(){
        return cy.get("[class='continue-button']")
    }
    getLoginConfirmationHeading(){
        return "Log in to your account"
    }
    getConfirmation(str){
        return cy.contains(str)
    }
    getEmailButton(){
        return cy.get("input[name='email'][type ='email']")
    }
    getEnabledLoginButton(){
        return cy.get("[class='continue-button']")
    }
}

export default CreateAccount;