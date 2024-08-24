describe("Sauce Demo Login", () => {
  it("Must login as valid user", () => {
    cy.visit("");
    cy.get("#login-button").should("exist");
    cy.get("#user-name").type(Cypress.env("USERNAME"));
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.get("#login-button").click();
    cy.get("#inventory_container").should("exist");
  });

  it("Must login as invalid user", () => {
    cy.visit("");
    cy.get("#login-button").should("exist");
    cy.get("#user-name").type(Cypress.env("INVALID_USERNAME"));
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.get("#login-button").click();
    cy.get(".error-button").should("exist");
  });
});
