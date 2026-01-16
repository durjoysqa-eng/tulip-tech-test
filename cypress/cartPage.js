class CartPage {
  elements = {
    addToCartBtn: () => cy.get('[data-test="add-to-cart"]'),
    quantityInput: () => cy.get('[data-test="product-quantity"]'),
    linePrice: () => cy.get('span[data-test="line-price"]'),
    cartIcon: () => cy.get('a[data-test="nav-cart"]') // cart link
  };

  /**
   * Add product to cart and navigate to Cart/Checkout page
   */
  addProductToCart() {
    // Scroll and click Add to Cart
    this.elements.addToCartBtn()
      .scrollIntoView({ duration: 500 })
      .should('be.visible')
      .click();

    // Click cart icon to go to checkout/cart page
    this.elements.cartIcon()
      .scrollIntoView({ duration: 500 })
      .should('be.visible')
      .click();

    // Wait for line price to appear on cart page
    this.elements.linePrice()
      .scrollIntoView({ duration: 500 })
      .should('be.visible');
  }

  /**
   * Change quantity of product in cart
   */
  changeQuantity(quantity) {
    this.elements.quantityInput()
      .scrollIntoView({ duration: 500 })
      .clear()
      .type(quantity)
      .blur(); // trigger Angular update

    // Wait for updated price to appear
    this.elements.linePrice()
      .scrollIntoView({ duration: 500 })
      .should('be.visible');
  }

  /**
   * Get the current line price
   */
  getPrice() {
    return this.elements.linePrice()
      .scrollIntoView({ duration: 500 })
      .should('be.visible')
      .invoke('text');
  }
}

export default new CartPage();
