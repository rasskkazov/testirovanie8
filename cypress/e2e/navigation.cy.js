import NavigationPage from "../pages/NavigationPage";

describe("Navigation", () => {
  beforeEach(() => {
    NavigationPage.visitHomePage();
  });

  it("Успешная навигация на секцию Books", () => {
    NavigationPage.goToSection("Books");
    NavigationPage.checkSectionUrl("/books");
    NavigationPage.checkSectionHeader("Books");
    cy.wait(1500);
  });

  it("Успешная навигация на секцию Computers", () => {
    NavigationPage.goToSection("Computers");
    NavigationPage.checkSectionUrl("/computers");
    NavigationPage.checkSectionHeader("Computers");
    cy.wait(1500);
  });

  it("Успешная навигация на секцию Electronics", () => {
    NavigationPage.goToSection("Electronics");
    NavigationPage.checkSectionUrl("/electronics");
    NavigationPage.checkSectionHeader("Electronics");
    cy.wait(1500);
  });

  it("Навигация в фигню", () => {
    cy.visit("https://demowebshop.tricentis.com/blah", {
      failOnStatusCode: false,
    });
    cy.wait(1500);
    cy.get("body").should("contain.text", "Page not found");
  });
});
