import LoginPage from "../../fixtures/page_objects/login.page"

describe('Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should not login with wrong credentials', () => {
      // Click login button in header
      LoginPage.LoginHeader.click()
  
      // Type in email and incorrect password
      LoginPage.Email.type('carisniu@gmail.com')
      LoginPage.Password.type('Pbklikesdh100%')
  
      // Click login submit button
      LoginPage.LoginButton.click()
  
      // Verify error alert box
      cy.get('[role = "alert"]')
    })
  
    it('should not login with empty credentials', () => {
      // Click login button in header
      LoginPage.LoginHeader.click()
  
      // Click login submit button
      LoginPage.LoginButton.click()
  
      // Verify "Email is required" message is displayed
      cy.contains("Email is required")
  
      // Verify "Password is required" message is displayed
      cy.contains("Password is required")
      
    })

    it('Should log in with existing credentials', () => {
      // Click login button in header
      LoginPage.LoginHeader.click()
  
      // Type in email and incorrect password
      LoginPage.Email.type('321paulkim@gmail.com')
      LoginPage.Password.type('Pbklikesdh100%')
  
      // Click login submit button
      LoginPage.LoginButton.click()

      // Verify assertion that the dashboard is displayed
      cy.url().should('have.exist', 'https://dev.delekhomes.com/dashboard/user/profile')
    })
})