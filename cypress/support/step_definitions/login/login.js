const {
    Given,
    When,
    Then
} = require("@badeball/cypress-cucumber-preprocessor")
const { loginPage } = require("../../../pageObjects/LoginPage")

Given("I am on the login page", ()=>{
    loginPage.visit()
    loginPage.validarLogiPage
})
/*
When(/^I fill in my email and password with "([^"]*)" and "([^"]*)"$/, function(username, password) {
    loginPage.login(username, password)
});

 */
Then(/^I should validate that I am logged in$/, function() {
    loginPage.validarLoginExitoso()
});
When(/^I fill in my email and password with (.*) and (.*)$/, function(username, password) {
    loginPage.login(username, password)

});
Then(/^I should validate that I am not logged in$/, function() {
    loginPage.validarErrorLogin()
});