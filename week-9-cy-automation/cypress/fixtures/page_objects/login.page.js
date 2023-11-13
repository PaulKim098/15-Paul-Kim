class LoginPage {
    get loginHeader() {return cy.get('[href="/auth/login"]')} 
    get email() {return cy.get('[name="email"]')}
    get password() {return cy.get('[name="password"]')}
    get loginButton() {return cy.get('[type = "submit"]')}
}

export default new LoginPage()