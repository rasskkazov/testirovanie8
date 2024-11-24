import RegistrationPage from "../pages/RegistrationPage";

describe("Registration Tests", () => {
  beforeEach(() => {
    RegistrationPage.visit(); // Открытие страницы регистрации перед каждым тестом
  });

  it("Should register successfully with valid data", () => {
    const email = `test${Date.now()}@example.com`; // Генерация уникального email
    RegistrationPage.fillRegistrationForm({
      firstName: "John",
      lastName: "Doe",
      email: email,
      password: "Password123",
    });
    RegistrationPage.submit();
    RegistrationPage.checkSuccessMessage(); // Проверяем успешное сообщение
  });

  it("Should show error for mismatched passwords", () => {
    RegistrationPage.fillRegistrationForm({
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      password: "Password123",
    });
    cy.get("#ConfirmPassword").type("Password321"); // Некорректный повтор пароля
    RegistrationPage.submit();
    RegistrationPage.checkErrorMessage(); // Проверка, что появилась ошибка
  });
});
