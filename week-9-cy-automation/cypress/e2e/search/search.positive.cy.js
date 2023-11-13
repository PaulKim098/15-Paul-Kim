// Should search by keyword
// Should search by bedrooms
// Should search by city(create your own listing with a unique city)
// Should navigate to the listing details page upon clicking “More Info“
// Should search by price


// 1. When searching, use the keyword “Galewood“ and verify that the title 
// of the listing appears on the page “Title of your own listing ”
// 2. When searching, use the bedrooms filter “2+”. When you click More Info on 
// any random listing, you must verify that the number of bedrooms should 
// equal or more than 2. 
// 3. When searching, use the City field and type a unique city name 
// (use from the pre-conditions). You will use this name 
// for the search listing to be sure that the result should display only one 
// listing with this city and verify that only one listing exists on the page 
// 4. Use the same listing created in step 3 and verify that all of the data that 
//shows on the search page also shows up on the listing details page after you 
// click “More Info“ 
// 5. Use the URL (which should contain the price of your own listing ) 
//and go directly to the search page. EX: Delek Homes
import HomePage from "../../fixtures/page_objects/home.page"

describe('Search', () => {

    beforeEach(() => {
      cy.visit('/')
    })

    it(`Should search by keyword, DH-1`, () => {
      HomePage.search('goku')

      cy.get('div[class*="css-1twzmnh"]').then(($attr) => {
        cy.wrap($attr.length).should('eql', 1)
      })
      cy.get('.MuiTypography-h5 ').should('have.text', 'PK House');
    })

    it(`Should search by bedrooms, DH-2`, () => {
      cy.contains('Bedrooms').next().click()
      cy.contains('2+').click()
      cy.contains('Start Search').click()
      cy.get('a[tabindex="0"]').each((house) => {
        cy.wrap(house).should('be.visible');
        cy.wrap(house).click();
        cy.contains('Property Realtor').should('be.visible')

        cy.get('div div[style*=flex]').eq(5).then((bedrooms) => {
          const numOfBedrooms = bedrooms.text().replace(/\D/g,'');
          expect(parseInt(numOfBedrooms)).to.be.above(1)
        })

      })
    })

    // it('Should search by city', () => {
    //   cy.get('type')
    // })

})