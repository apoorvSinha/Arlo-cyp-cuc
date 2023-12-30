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
    getPasswordLabel(){
        return cy.get("label[for='password']")
    }
    getShowPasswordButtonVisibility(){
        return cy.get("img[class^='show-password']")
    }
    getPasswordInput(){
        return cy.get("input[id='password']")
    }
}

export default CreateAccount;