Feature: The Internet Guinea Pig Website

  @BASIC_AUTH
  Scenario Outline: As a user, I can log into the secure area
    Given I use basic auth to login with <username> and <password>
    Then I should see a paragraph saying <message>

    Examples:
      | username | password | message                                                |
      | admin    | admin    | Congratulations! You must have the proper credentials. |
      | foo      | bar      | not authorized                                         |

# the failure of the second scenario suggests that either the specs are wildly incorrect or the error 
# scenario for the page has not been coded properly.