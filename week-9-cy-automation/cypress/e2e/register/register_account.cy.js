import RegisterPage from "../../fixtures/page_objects/register.page"
import LoginPage from "../../fixtures/page_objects/login.page"
import ProfilePage from "../../fixtures/page_objects/profile.page"


describe('Registration', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Should not register with empty credentials', () => {
      // Click register button in header
      RegisterPage.RegisterHeader.click()
  
      // Click login submit button
      RegisterPage.RegisterButton.click()

      // Verify error alert box
      cy.get('[id=":r5:-helper-text"]')
      cy.get('[id=":r6:-helper-text"]')
      cy.get('[id=":r7:-helper-text"]')
      cy.get('[id=":r8:-helper-text"]')
    })
  
    it('Should register with valid credentials', () => {
      // Click register button in header
      RegisterPage.RegisterHeader.click()
  
      // Type in First Name, Last Name, email, password 
      RegisterPage.FirstName.type('Sam')
      RegisterPage.LastName.type('Kolm')
      RegisterPage.Email.type('samkoln98@gmail.com')
      RegisterPage.Password.type('Pbklikesdh100%')
  
      // Select Register as Realtor
      RegisterPage.RegisterBox.click()

      // Click register submit button
      RegisterPage.RegisterButton.click()
    })

    it('Should be able to delete user with admin credentials', () => {
      // Click on Login button in header
      LoginPage.LoginHeader.click()

      // Login in with admin credentials
      LoginPage.Email.type('admin@gmail.com')
      LoginPage.Password.type('DontTestMe')

      // Click login submit button
      LoginPage.LoginButton.click()

      // Verify that page is on dashboard
      cy.url().should('include', '/dashboard')

      // Click on the Hamburger menu
      ProfilePage.HamburgerMenu.click()

      // Click on the list within the unordered list
      ProfilePage.List.click()

      // Click the search box and search the user
      ProfilePage.SearchBox.type('sam')

      // Find and select the kebab menu of the correct user
      cy.get('td').contains('samkoln98@gmail.com')
        .siblings('td')
        .find('[type="button"]')
        .click()

      // Click on the Delete option from list
      ProfilePage.Delete.contains('Delete').click()

      // Verify assertion for deleting test user
      cy.get('td')
        .contains('samkoln98@gmail.com')
        .should('not.exist')
    })
})