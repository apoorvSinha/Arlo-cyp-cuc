class HomePage{
    checkHamburgerMenu(){
        cy.get("div.nav-container-de5 div.logo-toggle-f5a button:nth-child(1)").then(function($el){
            if($el.is(':visible')){
                return true
            }
            return false
        })
    }
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
}

export default HomePage