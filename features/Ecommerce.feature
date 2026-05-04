Feature: Ecommerce validation
  @Smoke
  Scenario Outline: Scenario Outline name: Placing a order
    Given Login to Ecommerce aplication with <userName> and <password>
    When Add "ZARA COAT 3" product to cart
    Then Verify "ZARA COAT 3" is displayed in cart
    Then Place the ordernpx
Examples:
    | userName | password |
    | "tester@test.com"  | "Test@1234"  |
