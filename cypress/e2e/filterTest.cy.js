import FilterPage from "../pages/FilterPage";

describe("Filters", () => {
  beforeEach(() => {
    FilterPage.visit();
  });

  it("Применить фильтры до 25", () => {
    FilterPage.applyPriceFilter();
    cy.wait(1500);

    FilterPage.checkPrices();
  });
});
