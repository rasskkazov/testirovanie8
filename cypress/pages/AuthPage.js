class AuthPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/login");
  }

  fillAuthForm({ email, password }) {
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
  }

  submit() {
    cy.get(".login-button").click();
  }

  checkErrorMessage() {
    cy.get(".message-error").should("be.visible");
  }

  checkAuth({ email }) {
    cy.get(".account").should("contain.text", email);
  }
}

export default new AuthPage();
