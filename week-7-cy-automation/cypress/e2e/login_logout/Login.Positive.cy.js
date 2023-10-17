/// <reference types="cypress" />


describe('Login', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://dev.delekhomes.com/')
    })
  
    it('Should log in with existing credentials', () => {
      // Click login button in header
      cy.get('[href="/auth/login"]').click()
  
      // Type in email and incorrect password
      cy.get('[name="email"]').type('321paulkim@gmail.com')
      cy.get('[name="password"]').type('Pbklikesdh100%')
  
      // Click login submit button
      cy.get('[type = "submit"]').click()

      // Verify that dashboard is displayed
      cy.url().should('have.exist', 'https://dev.delekhomes.com/dashboard/user/profile')
    })
})