Feature: The Internet Guinea Pig Website

  @CHECKBOXES
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the Checkboxes page
    When I select checkbox <num>
    Then The checkbox should be <state>
      Examples:
      | num | state     |
      |   1 | checked   |
      |   3 | unchecked |
