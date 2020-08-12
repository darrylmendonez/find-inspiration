import cy from "cypress"

describe('App initialization', () => {
  before(() => {
    cy.visit('http://localhost:3005/')
  })
it('Renders without crashing', () => {

    cy.get('.navbar-brand')
      .containers('Find Inspiration')
  })
})