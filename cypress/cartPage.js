class CartPage {
  elements = {
    addToCartBtn: () => cy.get('[data-test="add-to-cart"]'),
    quantityInput: () => cy.get('[data-test="product-quantity"]'),
    linePrice: () => cy.get('[data-test="line-price"]'),
    cartIcon: () => cy.get('svg[data-icon="cart-shopping"]')
  };

  addProductToCart() {
    this.elements.addToCartBtn()
      .scrollIntoView({ duration: 500 })
      .should('be.visible')
      .click();

    cy.wait(1000);

    this.elements.cartIcon()
      .scrollIntoView({ duration: 500 })
      .should('be.visible')
      .click();

    // wait for line price to appear
    cy.get('[data-test="line-price"]', { timeout: 10000 }).should('be.visible');
  }

  changeQuantity(quantity) {
    this.elements.quantityInput()
      .scrollIntoView({ duration: 500 })
      .clear()
      .type(quantity)
      .blur();

    // wait for price update
    cy.get('[data-test="line-price"]', { timeout: 10000 }).should('be.visible');
  }

  getPrice() {
    return cy.get('[data-test="line-price"]', { timeout: 10000 })
             .should('be.visible')
             .invoke('text');
  }
}

export default new CartPage();
