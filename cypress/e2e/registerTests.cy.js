import RegistrationPage from "../pages/RegistrationPage";

describe("Registration", () => {
  const email = `test${Date.now()}@example.com`;

  it("Успешная регистрация", () => {
    RegistrationPage.visit();

    RegistrationPage.fillRegistrationForm({
      firstName: "John",
      lastName: "Doe",
      email,
      password: "Password123",
    });
    cy.wait(1500);

    RegistrationPage.submit();
    cy.wait(1500);

    RegistrationPage.checkSuccessMessage();
  });

  it("Регистрация с некорректным повтором пароля", () => {
    RegistrationPage.visit();

    RegistrationPage.fillRegistrationForm({
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      password: "Password123",
    });
    cy.wait(1500);

    cy.get("#ConfirmPassword").type("Password321");
    cy.wait(1500);

    RegistrationPage.submit();
    RegistrationPage.checkErrorMessage();
  });
});
