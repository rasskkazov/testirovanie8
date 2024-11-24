import RegistrationPage from "../pages/RegistrationPage";
import AuthPage from "../pages/AuthPage";

describe("Auth", () => {
  const email = `brasskazov@gmail.com`;
  const password = "b123456";

  it("Успешная авторизация", () => {
    AuthPage.visit();

    AuthPage.fillAuthForm({ email, password });
    cy.wait(1500);

    AuthPage.submit();
    cy.wait(1500);

    AuthPage.checkAuth({ email });
  });

  it("Авторизация с неверными кредитами", () => {
    AuthPage.visit();

    AuthPage.fillAuthForm({ email, password: "blah" });
    cy.wait(1500);

    AuthPage.submit();
    cy.wait(1500);

    AuthPage.checkErrorMessage({ email });
  });
});
