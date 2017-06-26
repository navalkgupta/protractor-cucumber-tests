#features/search.feature
Feature: Search on Here We Go
    As a user
    I should be able to search location in Here maps
    So that I can see nearby places and find routes
        
    Scenario: Search Test in HERE maps
        Given I search for location "navi"
        When I select first result "Navi Mumbai" from suggestions
        And I navigate to nearby "Parking" places
        Then I should see 51 place marker on map
        When I navigate to get Directions
        Then I should see 1 location marker on map
        When I enter from location "goregaon"
        And I select first result "Goregaon East" from suggestions
        Then I should see 2 location marker on map
        And I select first route from route results
        And I save the route and close route details
        