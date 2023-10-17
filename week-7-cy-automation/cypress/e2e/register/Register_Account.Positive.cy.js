
describe('Registration', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://dev.delekhomes.com/')
    })
  
    it('Should register with valid credentials', () => {
      // Click register button in header
      cy.get('[href="/auth/register"]').click()
  
      // Type in First Name, Last Name, email, password 
      cy.get('[id=":r5:"]').type('Sam')
      cy.get('[id=":r6:"]').type('Kolm')
      cy.get('[id=":r7:"]').type('samkoln98@gmail.com')
      cy.get('[id=":r8:"]').type('Pbklikesdh100%')
  
      // Select Register as Realtor
      cy.get('[class*="css-k36ljx"]').click()

      // Click register submit button
      cy.get('[type = "submit"]').click()
    })

    it('Should be able to delete user with admin credentials', () => {
      // Click on Login button in header
      cy.get('[href="/auth/login"]').click()

      // Login in with admin credentials
      cy.get('[name="email"]').type('admin@gmail.com')
      cy.get('[name="password"]').type('DontTestMe')

      // Click login submit button
      cy.get('[type = "submit"]').click()

      //
      cy.url().should('include', '/dashboard')

      cy.get('svg.iconify--eva').click()

      cy.get('ul').contains('list').click()

      cy.get('[type="text"]').type('sam')

      cy.get('td').contains('samkoln98@gmail.com')
        .siblings('td')
        .find('[type="button"]')
        .click()

      cy.get('li[role="menuitem"]').contains('Delete').click()

      // Assertion for deleting test user
      cy.get('td')
        .contains('samkoln98@gmail.com')
        .should('not.exist')
    })
})