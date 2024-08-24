describe("Add the products on the cart", () => {
  beforeEach(() => {
    cy.loginSuccessful(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
  });

  it("Must add only one product to the cart", () => {
    cy.addOneProductToCart();
  });

  it("Must add two products to the cart", () => {
    cy.get("#inventory_container").should("be.visible");
    cy.get(":nth-child(1) > .pricebar > .btn_primary").click();
    cy.get(":nth-child(2) > .pricebar > .btn_primary").click();
    cy.get(".fa-layers-counter").should("be.visible").and("contain", "2");
  });
});
