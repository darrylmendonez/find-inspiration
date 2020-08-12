const ROOT = `https://api.unsplash.com/`
const KEY ="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s"
const PERPAGE = `&per_page=30`

describe('Smoke tests', () => {

  context('When page loads', () => {

    it('loads 30 images on page load', () => {
      cy.seedAndVisit()
      cy.get('.grid .item')
        .should('have.length', 30)
    })
    
    it('displays an error on failure', () => {
      cy.server()
      cy.route({
        url: `${ROOT}photos${KEY}${PERPAGE}&page=1`,
        method: 'GET',
        status: 500,
        response: {}
      })
      
      cy.visit('/')
      cy.get('.grid .item')
        .should('not.exist')
    })

  })

  context('Search for images', () => {
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
  
      it('shows an error message on a failed submission', () => {
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

  context('View high res image and details', () => {
    
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

})