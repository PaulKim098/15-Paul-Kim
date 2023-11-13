import LoginPage from "../../fixtures/page_objects/login.page"
import ProfilePage from "../../fixtures/page_objects/profile.page"


describe('Logout', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Should log out with existing account', () => {
      // Click login button in header
      LoginPage.LoginHeader.click()
  
      // Type in email and incorrect password
      LoginPage.Email.type('321paulkim@gmail.com')
      LoginPage.Password.type('Pbklikesdh100%')
  
      // Click login submit button
      LoginPage.LoginButton.click()
  
      // Click profile circle button in header
      ProfilePage.PersonIcon.click()
    
      // Click Logout button
      ProfilePage.Logout.click()

      // Verify assertion on the login page
      cy.url().should('have.exist', 'https://delekhomes.com/auth/login')
    })
})