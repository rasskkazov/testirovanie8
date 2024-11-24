import RegistrationPage from "../pages/RegistrationPage";
import AuthPage from "../pages/AuthPage";

describe("Auth", () => {
  const email = `brasskazov@gmail.com`;
  const password = "b123456";

  it("Успешная авторизация", () => {
    AuthPage.visit();

    AuthPage.fillAuthForm({ email, password });

    AuthPage.submit();

    AuthPage.checkAuth({ email });
  });

  it("Авторизация с неверными кредитами", () => {
    AuthPage.visit();

    AuthPage.fillAuthForm({ email, password: "blah" });

    AuthPage.submit();

    AuthPage.checkErrorMessage({ email });
  });
});
