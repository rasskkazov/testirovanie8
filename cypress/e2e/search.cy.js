import SearchPage from "../pages/SearchPage";

describe("Product Search Tests", () => {
  beforeEach(() => {
    SearchPage.visit();
  });

  it("Нашел книжку", () => {
    SearchPage.searchProduct("book");
    SearchPage.checkSearchResult("Health Book");
  });

  it("Вывел книжку по неполному поиску", () => {
    SearchPage.searchProduct("boo");
    SearchPage.checkSearchResult("Health Book");
  });

  it("Ничего не нашел", () => {
    SearchPage.searchProduct("ищу фуфло");
    SearchPage.checkNoResultsMessage();
  });
});
