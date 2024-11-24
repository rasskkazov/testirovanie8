import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

describe("Filters", () => {
  it("Добавить товар в корзину", () => {
    ProductPage.visit();

    ProductPage.fillForm({
      recName: "Bogdan",
      recEmail: "brasska@gmail.com",
    });
    cy.wait(1500);

    ProductPage.addToCart();
    cy.wait(1500);

    ProductPage.goToCart();

    CartPage.checkProductAtCart();

    CartPage.changeProductAmount({ amount: 2 });
    cy.wait(1500);

    CartPage.checkProductInvalidAmount();
  });
});
