const {
  Given,
  When,
  Then
} = require("@badeball/cypress-cucumber-preprocessor")
const { loginPage } = require("../../../pageObjects/LoginPage");
const { navigationAccountActivityPage } = require("../../../pageObjects/NavigationAccountActivityPage");

//Compartir los paso

Given("I am on the home page", ()=>{
  loginPage.validarLoginExitoso()
})
When(/^I click on the Account Activity Nav$/, function() {
  //Reto con un page Object
  //cy.contains("Account Activity").click()
  navigationAccountActivityPage.ir_a_ShowTransactions()
  navigationAccountActivityPage.validarShowTransactions()

});
Then(/^I should see theAccount Activity content$/, function() {
  cy.contains("Show Transactions").should("be.visible")
});