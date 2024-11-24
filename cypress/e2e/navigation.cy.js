import NavigationPage from "../pages/NavigationPage";

describe("Navigation Tests", () => {
  beforeEach(() => {
    NavigationPage.visitHomePage();
  });

  it("Успешная навигация на секцию Books", () => {
    NavigationPage.goToSection("Books");
    NavigationPage.checkSectionUrl("/books");
    NavigationPage.checkSectionHeader("Books");
  });

  it("Успешная навигация на секцию Computers", () => {
    NavigationPage.goToSection("Computers");
    NavigationPage.checkSectionUrl("/computers");
    NavigationPage.checkSectionHeader("Computers");
  });

  it("Успешная навигация на секцию Electronics", () => {
    NavigationPage.goToSection("Electronics");
    NavigationPage.checkSectionUrl("/electronics");
    NavigationPage.checkSectionHeader("Electronics");
  });

  it("Навигация в фигню", () => {
    cy.visit("https://demowebshop.tricentis.com/blah", {
      failOnStatusCode: false,
    });
    cy.get("body").should("contain.text", "Page not found");
  });
});
