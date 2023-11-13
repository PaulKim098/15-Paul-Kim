class RegisterPage {
    get registerHeader() {return cy.get('[href="/auth/register"]')}
    get registerButton() {return cy.get('[type = "submit"]')}
    get firstName() {return cy.get('[id=":r5:"]')}
    get lastName() {return cy.get('[id=":r6:"]')}
    get email() {return cy.get('[id=":r7:"]')}
    get password() {return cy.get('[id=":r8:"]')}
    get RegisterBox() {return cy.get('label span:nth-of-type(2)')}

    register (firstName, lastName, email, password){
        this.firstName.type(firstName);
        this.firstName.type(lastName);
        this.firstName.type(email);
        this.firstName.type(password);
    }
}

export default new RegisterPage()