Feature: The Internet Guinea Pig Website

  @INDEX
  Scenario Outline: As a user,  I can navigate to all pages
    Given I am at the index page
    When I click the <page> link
    Then I should be directed to the selected page with heading <heading>

    Examples:
      | page                          | heading           |
      | A/B Testing                   | A/B Test          |
      | Add/Remove Elements           |                   |
      | Basic Auth                    |                   |
      | Broken Images                 |                   |
      | Challenging DOM               |                   |
      | Checkboxes                    |                   |
      | Context Menu                  |                   |
      | Digest Authentication         |                   |
      | Disappearing Elements         |                   |
      | Drag and Drop                 |                   |
      | Dropdown                      |                   |
      | Dynamic Content               |                   |
      | Dynamic Controls              |                   |
      | Dynamic Loading               | Dynamically Loaded Page Elements                  |
      | Entry Ad                      |                   |
      | Exit Intent                   |                   |
      | File Download                 |                   |
      | File Upload                   |                   |
      | Floating Menu                 |                   |
      | Forgot Password               |                   |
      | Form Authentication           |                   |
      | Frames                        |                   |
      | Geolocation                   |                   |
      | Horizontal Slider             |                   |
      | Hovers                        |                   |
      | Infinite Scroll               |                   |
      | Inputs                        |                   |
      | JQuery UI Menus               |                   |
      | JavaScript Alerts             |                   |
      | JavaScript onload event error |                   |
      | Key Presses                   |                   |
      | Large & Deep DOM              |                   |
      | Multiple Windows              |                   |
      | Nested Frames                 |                   |
      | Notification Messages         | Notification Message                  |
      | Redirect Link                 | Redirection                  |
      | Secure File Download          |                   |
      | Shadow DOM                    |                   |
      | Shifting Content              |                   |
      | Slow Resources                |                   |
      | Sortable Data Tables          |                   |
      | Status Codes                  |                   |
      | Typos                         |                   |
      | WYSIWYG Editor                |                   |
    
# it is unclear if the page names in the app should match or if the "page" is simply an alias and can have A
# separate/distinct heading
# the failure of this test at a specific point suggests either the app is not able to support the Loaded
# or the WDIO calls need to improve wait time handling better, or stagger their execution