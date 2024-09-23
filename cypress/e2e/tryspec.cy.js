describe("Opens the seiyuu tab", () => {
  it("visits all-seiyuu page", () => {
    cy.visit("http://localhost:9000/")
      .get(".q-btn")
      .click()
      .get(".q-drawer")
      .get(".q-item")
      .contains("Seiyuus")
      .click();
  });

  it("Checks search bar", () => {
    cy.visit("http://localhost:9000/#/seiyuu");
    cy.get(".q-pa-md").contains("Search").should("have.class", "q-field");
  });
  it("Opens Rieri's seiyuu page", () => {
    cy.visit("http://localhost:9000/#/seiyuu/415").contains("Rie Takahashi");
  });
  it("Opens Rieri's seiyuu page via search bar", () => {
    cy.visit("http://localhost:9000/#/seiyuu");
    cy.get(".q-placeholder").type("Rie Ta");
    cy.get(".cursor-pointer").contains("Rie Takahashi").click();
    cy.contains("Rie Takahashi");
  });
});
