import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProtectPlan from "../../support/pages/ProtectPlanHover";
const protectPlan = new ProtectPlan()


When("user is able to hover over the Protect plan tab", function () {
    protectPlan.getProtectPlanHover().click()
})

Then("user should be able to verify available options", function(){
    protectPlan.getDoorBellsAndCameras().should("include.text", "Doorbells and Cameras")
    protectPlan.getAlarmPlans().should("include.text", "For Alarms")
    protectPlan.getCarCamPlans().should("include.text", "For Car Cam")
    protectPlan.getVSG().should("include.text", "Virtual Security Guard")
})
