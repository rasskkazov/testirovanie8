class SearchPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/");
  }

  searchProduct(productName) {
    cy.get("#small-searchterms").type(`${productName}{enter}`);
  }

  checkSearchResult(expectedProduct) {
    cy.get(".product-title").should("contain.text", expectedProduct);
  }

  checkNoResultsMessage() {
    cy.get(".search-results").should(
      "contain.text",
      "No products were found that matched your criteria."
    );
  }
}

export default new SearchPage();
