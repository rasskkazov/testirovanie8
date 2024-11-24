import RegistrationPage from "../pages/RegistrationPage";

describe("Registration Tests", () => {
  const email = `test${Date.now()}@example.com`;

  it("Успешная регистрация", () => {
    RegistrationPage.visit();

    RegistrationPage.fillRegistrationForm({
      firstName: "John",
      lastName: "Doe",
      email,
      password: "Password123",
    });
    RegistrationPage.submit();
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
    cy.get("#ConfirmPassword").type("Password321");
    RegistrationPage.submit();
    RegistrationPage.checkErrorMessage();
  });
});
