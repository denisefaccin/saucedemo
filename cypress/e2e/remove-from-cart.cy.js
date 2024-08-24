describe("Remove the product from the cart", () => {
  beforeEach(() => {
    cy.loginSuccessful(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
  });

  it("Must remove the product from the cart", () => {
    cy.addOneProductToCart();
    cy.get(".btn_secondary").click();
    cy.get(".btn_primary").should("be.visible");
  });
});
