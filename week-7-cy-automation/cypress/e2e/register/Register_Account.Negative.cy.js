/// <reference types="cypress" />


describe('Registration', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://dev.delekhomes.com/')
    })
  
    it('Should not register with empty credentials', () => {
      // Click register button in header
      cy.get('[href="/auth/register"]').click()
  
      // Click login submit button
      cy.get('[type = "submit"]').click()

      // Verify error alert box
      cy.get('[id=":r5:-helper-text"]')
      cy.get('[id=":r6:-helper-text"]')
      cy.get('[id=":r7:-helper-text"]')
      cy.get('[id=":r8:-helper-text"]')
    })
})