class NavigationPage {
  visitHomePage() {
    cy.visit("https://demowebshop.tricentis.com/");
  }

  goToSection(sectionName) {
    cy.get("ul.top-menu").contains(sectionName).click();
  }

  checkSectionUrl(expectedUrl) {
    cy.url().should("include", expectedUrl);
  }

  checkSectionHeader(expectedHeader) {
    cy.get("h1").should("have.text", expectedHeader);
  }
}

export default new NavigationPage();
