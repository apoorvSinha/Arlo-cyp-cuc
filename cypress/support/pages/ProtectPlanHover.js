class ProtectPlan{
    getProtectPlanHover(){
        return cy.get("div.nav-items-container-a58 [aria-label='Protect Plans']")
    }
    activateProtectHover(){
        return cy.get("li.nav-item-b0e [aria-label='Protect Plans']");
    }
    activateRandomnClass(){
        return cy.get("div.bg-overlay-ae3");
    }
    getDoorBellsAndCameras(){
        return cy.get("[aria-label='For Doorbells and Cameras: Compare plans'] h2")
    }
    getAlarmPlans(){
        return cy.get("[aria-label = 'For Alarms: Learn more'] h2")
    }
    getCarCamPlans(){
        return cy.get("[aria-label='For Car Cam: Learn more'] h2")
    }
    getVSG(){
        return cy.get("div.menu-holder-c35.visible-c95  a:nth-child(4)  div:nth-child(1)  h2")
    }
}
export default ProtectPlan