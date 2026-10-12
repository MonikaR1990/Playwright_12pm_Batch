Feature: Login Functionality

Scenario: Verify that user able to login sucessful with valid credendials
Given user navigate to the login page
And user enters username and password
When user clicks the login button
Then user navigate to the user home page

Scenario: Verify that user get invalid error for invalid login
Given user navigate to the login page
And user enters invalid username and password
When user clicks the login button
Then user should see the login error





