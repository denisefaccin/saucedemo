Cypress.Commands.add("loginSuccessful", (username, password) => {
  cy.visit("");
  cy.get("#login-button").should("exist");
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
  cy.get("#inventory_container").should("exist");
});

Cypress.Commands.add("addOneProductToCart", () => {
  cy.get("#inventory_container").should("be.visible");
  cy.get("#item_4_img_link > .inventory_item_img").click();
  cy.get(".btn_primary").click();
  cy.get(".btn_secondary").should("exist");
  cy.get(".fa-layers-counter").should("be.visible").and("contain", "1");
});
