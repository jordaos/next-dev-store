describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should open cart list and show empty cart message when hover over cart component without products added', () => {
    cy.contains('Carrinho vazio').should('not.be.visible')

    cy.getBySelector('cart-widget-group').realHover()

    cy.contains('Carrinho vazio').should('be.visible')

    cy.resetRealHover()
  })

  it('should open cart list and show products when hover over cart component with products added', () => {
    cy.visit('/')
    cy.contains('Carrinho vazio').should('not.be.visible')

    cy.getBySelector('product-card').first().realHover()

    cy.getBySelector('add-to-cart-button').should('be.visible')

    cy.getBySelector('product-card')
      .first()
      .find('[data-test="add-to-cart-button"]')
      .click()

    cy.getBySelector('cart-widget-group').realHover()

    cy.contains('Carrinho vazio').should('not.exist')

    cy.getBySelector('cart-item-component').should('have.length', 1)

    cy.resetRealHover()
  })

  it('should remove product from cart list', () => {
    cy.visit('/')
    cy.contains('Carrinho vazio').should('not.be.visible')

    cy.getBySelector('product-card').first().realHover()

    cy.getBySelector('add-to-cart-button').should('be.visible')

    cy.getBySelector('product-card')
      .first()
      .find('[data-test="add-to-cart-button"]')
      .click()

    cy.getBySelector('cart-widget-group').realHover()

    cy.contains('Carrinho vazio').should('not.exist')

    cy.getBySelector('cart-item-component').should('have.length', 1)

    cy.getBySelector('cart-item-component')
      .first()
      .find('[data-test="cart-item-component-remove-btn"]')
      .click()

    cy.contains('Carrinho vazio').should('be.visible')

    cy.resetRealHover()
  })
})
