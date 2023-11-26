class HomePage{
    getUrl(){
        return cy.url()
    }
    getProductBtn(){
        return cy.get("ul.nav-items-list-fb8 li:nth-child(1)")
    }
    getProtectPlanBtn(){
        return cy.get("ul.nav-items-list-fb8 li:nth-child(2)")
    }
    getCommunityBtn(){
        return cy.get("ul.nav-items-list-fb8 li:nth-child(3)")
    }
    getServicesBtn(){
        return cy.get("ul.nav-items-list-fb8 li:nth-child(4)")
    }
    getBusinessSolutionBtn(){
        return cy.get("ul.nav-items-list-fb8 li:nth-child(5)")
    }
    getLoginBtn(){
        return cy.get("[aria-label='Log in']")
    }
    getSearchBtn(){
        return cy.get("[aria-label='Search']")
    }
    getCareHelpBtn(){
        return cy.get("a[aria-label='Help']")
    }
    getCartBtn(){
        return cy.get("[aria-label='Cart']")
    }
    
}

export default HomePage