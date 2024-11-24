class CartPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/cart");
  }

  checkProductAtCart() {
    cy.get(".product-name").should("contain.text", "$25 Virtual Gift Card");
  }
}

export default new CartPage();
