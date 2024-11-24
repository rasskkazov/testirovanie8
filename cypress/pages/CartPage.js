class CartPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/cart");
  }

  checkProductAtCart() {
    cy.get(".product-name").should("contain.text", "$25 Virtual Gift Card");
  }

  changeProductAmount({ amount }) {
    cy.get(".qty-input").clear().type(amount).type("{enter}");

    cy.get(".product-unit-price").then(($priceElement) => {
      const priceText = $priceElement.text().trim();
      const price = parseFloat(priceText.replace("$", "").trim());

      cy.get(".product-subtotal").should("contain.text", amount * price);
    });
  }

  checkProductInvalidAmount() {
    cy.get(".qty-input").clear().type(999999).type("{enter}");

    cy.get(".message-error").should("be.visible");
  }
}

export default new CartPage();
