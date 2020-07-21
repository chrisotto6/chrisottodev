const A11Y_CONFIG = {
  checks: [
    {
      id: 'aria-valid-attr-value',
      enabled: false,
    },
  ],
}

describe('Accessibility checks', () => {
  it('Main Page', () => {
    cy.visit('/')
    cy.wait(2000)
    cy.injectAxe().configureAxe(A11Y_CONFIG).checkA11y()
  })

  //it('About Page', () => {
  //  cy.visit('/about')
  //  cy.wait(1000)
  //  cy.injectAxe().configureAxe(A11Y_CONFIG).checkA11y()
  //})

  it('Tags Page', () => {
    cy.visit('/tag')
    cy.wait(1000)
    cy.injectAxe().configureAxe(A11Y_CONFIG).checkA11y()
  })

  it('Projects Page', () => {
    cy.visit('/project')
    cy.wait(1000)
    cy.injectAxe().configureAxe(A11Y_CONFIG).checkA11y()
  })

  it('Seach Page', () => {
    cy.visit('/search')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('Contact Page', () => {
    cy.visit('/contact')
    cy.wait(1000)
    cy.injectAxe().configureAxe(A11Y_CONFIG).checkA11y()
  })

  it('404 Page', () => {
    cy.visit('/404')
    cy.injectAxe().configureAxe(A11Y_CONFIG).checkA11y()
  })
})
