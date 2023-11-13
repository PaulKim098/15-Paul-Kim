class HomePage {
    get inputSearch() {return cy.get('[type="text"]')}
    get btnStartSearch() {return cy.contains('Start Search')}
    get bedroomSearch() {return cy.get([id=":ra:"])}
    
    search(keyword) {
        this.inputSearch.first().type(keyword, {force : true })
        this.btnStartSearch.click()
    }
}

export default new HomePage()