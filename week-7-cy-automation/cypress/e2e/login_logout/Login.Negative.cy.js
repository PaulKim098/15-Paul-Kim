/// <reference types="cypress" />


describe('Login', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://dev.delekhomes.com/')
    })
  
    it('should not login with existing account', () => {
      // Click login button in header
      cy.get('[href="/auth/login"]').click()
  
      // Type in email and incorrect password
      cy.get('[name="email"]').type('carisniu@gmail.com')
      cy.get('[name="password"]').type('Pbklikesdh100%')
  
      // Click login submit button
      cy.get('[type = "submit"]').click()
  
      // Verify error alert box
      cy.get('[role = "alert"]')
    })
  
    it('should not login with empty credentials', () => {
      // Click login button in header
      cy.get('[href="/auth/login"]').click()
  
      // Click login submit button
      cy.get('[type = "submit"]').click()
  
      // Verify "Email is required" message is displayed
      cy.contains("Email is required")
  
      // Verify "Password is required" message is displayed
      cy.contains("Password is required")
      
    })
})