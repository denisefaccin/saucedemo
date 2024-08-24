describe("Demo test", () => {
  it("Must login as valid user", () => {
    cy.visit("");
    cy.get("body").should("exist");
  });
});
