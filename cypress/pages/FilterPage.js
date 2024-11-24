class FilterPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/books");
  }

  applyPriceFilter() {
    cy.get(".price-range-filter li a").first().click();
  }

  checkPrices() {
    cy.get(".actual-price").each(($el) => {
      const priceText = $el.text().trim();
      const price = parseFloat(priceText.replace("$", "").trim());
      expect(price).to.be.lessThan(26);
    });
  }
}

export default new FilterPage();
