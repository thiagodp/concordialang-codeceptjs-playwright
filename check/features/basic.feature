Feature: F1

Scenario: S1

  Variant: V1
    Given that I am on "https://google.com"
    When I fill <q> with "concordialang"
      and I press "Enter"
    Then I see "npm"