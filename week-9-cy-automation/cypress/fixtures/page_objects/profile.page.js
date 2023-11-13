class ProfilePage {
    get personIcon() {return cy.get('button [data-testid="PersonIcon"]')}
    get hamburgerMenu() {return cy.get('svg.iconify--eva')}
    get searchBox() {return cy.get('[type="text"]')}
    get list() {return cy.get('ul').contains('list')}
    get delete() {return cy.get('li[role="menuitem"]')}
    get logout() {return cy.get('li[role="menuitem"]')}
}

export default new ProfilePage()