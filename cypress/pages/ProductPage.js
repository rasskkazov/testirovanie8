class ProductPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/25-virtual-gift-card");
  }

  fillForm({ recEmail, recName }) {
    cy.get("#giftcard_2_RecipientEmail").type(recEmail);
    cy.get("#giftcard_2_RecipientName").type(recName);
    cy.get("#giftcard_2_SenderName").type(recName);
    cy.get("#giftcard_2_SenderEmail").type(recEmail);
  }

  addToCart() {
    cy.get("#add-to-cart-button-2").click();
  }

  goToCart() {
    cy.visit("https://demowebshop.tricentis.com/cart");
  }
}

export default new ProductPage();
