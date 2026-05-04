Feature: Demo validation
  @sanity
  Scenario: Validating
    Given Navigate to playwright application
    When click on Get Started link
    Then Verify Installation heading is visible