class RegistrationPage {
  visit() {
    cy.visit("https://demowebshop.tricentis.com/register");
  }

  fillRegistrationForm({ firstName, lastName, email, password }) {
    cy.get("#FirstName").type(firstName);
    cy.get("#LastName").type(lastName);
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get("#ConfirmPassword").type(password);
  }

  submit() {
    cy.get("#register-button").click();
  }

  checkSuccessMessage() {
    cy.contains(".result", "Your registration completed").should("be.visible");
  }

  checkErrorMessage() {
    cy.get(".field-validation-error").should("be.visible");
  }
}

export default new RegistrationPage();
