Feature: Login Outline

  Scenario Outline: Login with invald credentials
    Given I am on the login page
    When I fill in my email and password with <user> and <pass>
    Then I should validate that I am not logged in
    Examples:
      | user          | pass          |
      |username3      |password3      |
      |username2      |passwo3        |
      |username1      |password22      |
      |username4      |passwo00        |