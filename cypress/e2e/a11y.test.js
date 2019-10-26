describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('localhost:8000')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('404 Page', () => {
    cy.visit('localhost:8000/404')
    cy.injectAxe()
    cy.checkA11y()
  })
})
