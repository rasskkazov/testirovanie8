import FilterPage from "../pages/FilterPage";

describe("Filters", () => {
  beforeEach(() => {
    FilterPage.visit();
  });

  it("Применить фильтры до 25", () => {
    FilterPage.applyPriceFilter();

    FilterPage.checkPrices();
  });
});
