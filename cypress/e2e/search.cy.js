import SearchPage from "../pages/SearchPage";

describe("Search", () => {
  beforeEach(() => {
    SearchPage.visit();
  });

  it("Нашел книжку", () => {
    SearchPage.searchProduct("book");
    cy.wait(1500);

    SearchPage.checkSearchResult("Health Book");
  });

  it("Вывел книжку по неполному поиску", () => {
    SearchPage.searchProduct("boo");
    cy.wait(1500);

    SearchPage.checkSearchResult("Health Book");
  });

  it("Ничего не нашел", () => {
    SearchPage.searchProduct("ищу фуфло");
    cy.wait(1500);

    SearchPage.checkNoResultsMessage();
  });
});
