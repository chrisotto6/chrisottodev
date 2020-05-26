describe('Generated Pages Tests', () => {
  it('Uses Page', () => {
    cy.visit('/uses')
    cy.get('[id=Uses]').contains('Uses')
  })

  it('Resources Page', () => {
    cy.visit('/resources')
    cy.get('[id=Resources]').contains('Resources')
  })

  it('Success Page', () => {
    cy.visit('/Success')
    cy.get('[id=Success]').contains('Success')
  })
})
