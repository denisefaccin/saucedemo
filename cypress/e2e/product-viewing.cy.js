describe("Product viewing", () => {
  beforeEach(() => {
    cy.loginSuccessful(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
  });

  it("Must view product list", () => {
    cy.get("#inventory_container").should("be.visible");
  });

  it("Must sort name A-Z", () => {
    cy.get(".product_sort_container").select("az");
    cy.get(".inventory_list > :nth-child(1)").should(
      "contain",
      "Sauce Labs Backpack"
    );
  });

  it("Must sort name Z-A", () => {
    cy.get(".product_sort_container").select("za");
    cy.get(".inventory_list > :nth-child(1)").should(
      "contain",
      "Test.allTheThings() T-Shirt (Red)"
    );
  });

  it("Must sort price low-high", () => {
    cy.get(".product_sort_container").select("lohi");
    cy.get(".inventory_list > :nth-child(1)").should(
      "contain",
      "Sauce Labs Onesie"
    );
  });

  it("Must sort price high-low", () => {
    cy.get(".product_sort_container").select("hilo");
    cy.get(".inventory_list > :nth-child(1)").should(
      "contain",
      "Sauce Labs Fleece Jacket"
    );
  });
});
