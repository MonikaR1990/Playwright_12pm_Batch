Feature: User Register Functionality

Scenario: Verify that user able to do successful registration with valid details
Given user navigate to the register page
When user selects gender
And user enters the valid details
And user clicks the register button
Then user should see register successful message

