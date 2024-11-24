import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

describe("Filters", () => {
  it("Добавить товар в корзину", () => {
    ProductPage.visit();

    ProductPage.fillForm({
      recName: "Bogdan",
      recEmail: "brasska@gmail.com",
    });

    cy.wait(2000);

    ProductPage.addToCart();
    cy.wait(2000);
    ProductPage.goToCart();

    CartPage.checkProductAtCart();
  });
});
