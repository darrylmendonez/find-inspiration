Cypress.Commands.add('seedAndVisit', () => {
  const ROOT = `https://api.unsplash.com/`
  const KEY ="?client_id=Ec1n2AKEb00jiprb4C_6LFncc57yZHxst8TYXNPvp7s"
  const PERPAGE = `&per_page=30`

  cy.server()
  cy.route('GET', `${ROOT}photos${KEY}${PERPAGE}&page=1`)
  cy.visit('/')
})