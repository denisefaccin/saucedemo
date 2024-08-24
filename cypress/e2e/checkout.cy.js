describe("Checkout", () => {
  beforeEach(() => {
    cy.loginSuccessful(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
  });

  it("Must complete purchase successfulyl", () => {
    cy.addOneProductToCart();
    cy.get(".fa-layers-counter").should("contain", "1").click();
    cy.get(".btn_action").click();
    cy.get('[data-test="firstName"]').type("Denise");
    cy.get('[data-test="lastName"]').type("Faccin");
    cy.get('[data-test="postalCode"]').type("88701001");
    cy.get(".btn_primary").click();
    cy.get(".btn_action").should("be.visible").click();
    cy.get(".complete-header").should("exist");
  });

  it("Attempt to complete purchase without filling required fields", () => {
    cy.addOneProductToCart();
    cy.get(".fa-layers-counter").should("contain", "1").click();
    cy.get(".btn_action").click();
    cy.get(".btn_primary").click();
    cy.get(".error-button").should("be.visible");
  });
});
