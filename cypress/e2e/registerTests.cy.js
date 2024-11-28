import RegistrationPage from "../pages/RegistrationPage";

describe("Registration", () => {
  const email = `test${Date.now()}@example.com`;
  const invalidEmail = `test${Date.now()}`;

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

  it("Регистрация невалидной формой email", () => {
    RegistrationPage.visit();

    RegistrationPage.fillRegistrationForm({
      firstName: "Jane",
      lastName: "Doe",
      email: invalidEmail,
      password: "Password123",
    });
    cy.wait(1500);

    RegistrationPage.submit();
    RegistrationPage.checkErrorMessage();
  });

  it("Регистрация с слишком коротким паролем", () => {
    RegistrationPage.visit();

    RegistrationPage.fillRegistrationForm({
      firstName: "Jane",
      lastName: "Doe",
      email,
      password: "a",
    });
    cy.wait(1500);

    RegistrationPage.submit();
    RegistrationPage.checkErrorMessage();
  });
});
