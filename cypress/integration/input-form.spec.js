const ROOT = `https://api.unsplash.com/`
const KEY ="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s"
const PERPAGE = `&per_page=30`

  describe('Input form', () => {
  beforeEach(() => {
    cy.seedAndVisit()
  })
  it('focuses input on load', () => {
    cy.focused()
      .should('have.class', 'form-control')
  })
  it('accepts input', () => {
    const typedText = 'dogs'
    cy.get('.form-control')
      .type(typedText)
      .should('have.value', typedText)
  })
  context('Form submission', () => {
    const searchTerm = 'flowers'
    it('performs a search on submit', () => {
      cy.get('.form-control')
        .type(searchTerm)
        .type('{enter}')
        .should('have.value', '')
      cy.get('.grid .item')
        .should('have.length', 30)
    })

    it.only('shows an error message on a failed submission', () => {
      cy.server()
      cy.route({
        url: `${ROOT}search/photos${KEY}${PERPAGE}`,
        method: 'GET',
        status: 500,
        response: {}
      })

      cy.get('.form-control')
        .type('{enter}')

      cy.get('.grid .item')
        .should('not.exist')

      cy.get('.error')
        .should('be.visible')
    })
  })
})