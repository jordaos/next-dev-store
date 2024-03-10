/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
    resetRealHover(): Chainable<void>
    getBySelector(selector: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.visit('/')
  cy.get('input[name=q]').type(query).parent('form').submit()
})

Cypress.Commands.add('getBySelector', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})

Cypress.Commands.add('resetRealHover', () => {
  cy.get('body').realHover({ position: 'topLeft' })
})
