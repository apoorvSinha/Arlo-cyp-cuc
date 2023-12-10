import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProtectPlan from "../../e2e/pages/ProtectPlanHover";
const protectPlan = new ProtectPlan()


When("user is able to hover over the Protect plan tab", function () {
    protectPlan.getProtectPlanHover().click()
    protectPlan.getDoorBellsAndCameras().should("include.text", "Doorbells and Cameras")
    protectPlan.getAlarmPlans().should("include.text", "For Alarms")
    protectPlan.getCarCamPlans().should("include.text", "For Car Cam")
    protectPlan.getVSG().should("include.text", "Virtual Security Guard")
})
