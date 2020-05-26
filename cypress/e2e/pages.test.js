describe('Markdown Generated Pages Tests', () => {
  it('Uses Page', () => {
    cy.visit('/uses')
    cy.get('[id=Uses]').contains('Uses')
  })

  it('Resources Page', () => {
    cy.visit('/resources')
    cy.get('[id=Resources]').contains('Resources')
  })

  it('Success Page', () => {
    cy.visit('/success')
    cy.get('[id=Success]').contains('Success')
  })
})

describe('Pages Tests', () => {
  it('About Page', () => {
    cy.visit('/about')
    cy.get('[id=About]').contains('About')
  })

  it('Tags Page', () => {
    cy.visit('/tag')
    cy.get('[id="Posts by tags"]').contains('Posts by tags')
  })

  it('Projects Page', () => {
    cy.visit('/project')
    cy.get('[id=Projects]').contains('Projects')
  })

  it('Search Page', () => {
    cy.visit('/search')
    cy.get('.ais-SearchBox-input').should('have.attr', 'placeholder', 'Search')
  })

  it('Contact Page', () => {
    cy.visit('/contact')
    cy.get('[id=Contact]').contains('Contact')
  })
})
