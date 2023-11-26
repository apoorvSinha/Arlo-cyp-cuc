class ProductHover{
    getProductHoverPage(){
        return cy.get("div.gn-main-c90 div.menu-holder-c35:nth-child(4)")
    }
    getOutdoorCams(){
        return cy.get("[aria-label='Outdoor Cameras']")
    }
}
export default ProductHover