describe('Gallery items', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })

  it('launches modal on img click', () => {
    cy.get('.grid .item')
      .first()
      .as('first-grid-item')
    cy.get('@first-grid-item')
      .find('img')
      .click()
    cy.get('.modal')
      .should('be.visible')
  })

})