class ProductHover{ 
    getProductHoverPage(){
        return cy.get("div.gn-main-c90 div.menu-holder-c35:nth-child(4)")
    }
    //outdoor cams
    getOutdoorCams(){
        return cy.get("[aria-label='Outdoor Cameras']")
    }
    getStickUpCam(){
        return cy.get("div.panel-c41:nth-child(2) div.card-grid-a92 div.card-e9b:nth-child(1) span.title-a23")
    } //change second and 4th
    getSpotlightCam(){
        return cy.get("div.panel-c41:nth-child(2) div.card-grid-a92 div.card-e9b:nth-child(2) span.title-a23")
    }
    getFllodLigthCam(){
        return cy.get("div.panel-c41:nth-child(2) div.card-grid-a92 div.card-e9b:nth-child(3) span.title-a23")
    }
    getOutdoorAx(){
        return cy.get("div.panel-c41:nth-child(2) div.card-grid-a92 div.card-e9b:nth-child(4) span.title-a23")
    }
    //Indoor cams
    getIndoorCams(){
        return cy.get("[aria-label='Indoor Cameras']")
    }
}
export default ProductHover