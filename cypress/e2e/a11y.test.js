describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('Tags Page', () => {
    cy.visit('/tag')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('Projects Page', () => {
    cy.visit('/project')
    cy.injectAxe()
    cy.checkA11y()
  })

  // https://github.com/algolia/react-instantsearch/issues/2863 - Can't have this test yet
  // Algolia doesn't allow for defaulting an aria-label, nor supplying one

  //it('Seach Page', () => {
  //  cy.visit('/search')
  //  cy.injectAxe()
  //  cy.checkA11y()
  //})

  it('Contact Page', () => {
    cy.visit('/contact')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('404 Page', () => {
    cy.visit('/404')
    cy.injectAxe()
    cy.checkA11y()
  })
})
