const ROOT = `https://api.unsplash.com/`
const KEY ="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s"
const PERPAGE = `&per_page=30`
  
describe('App initialization', () => {
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