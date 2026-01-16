import CartPage from '../cartPage';

describe('Add to Cart and Update Quantity', () => {

  it('Should update price when quantity changes', () => {
    cy.viewport(1920, 1080);

    // Visit product page
    cy.visit('/product/01KF3ATVWGXZ85GSAXVN70P71K');

    // Add product to cart and open cart page
    CartPage.addProductToCart();

    // Capture initial line price
    CartPage.getPrice().then((initialPrice) => {
      const initialAmt = parseFloat(initialPrice.replace('$', ''));

      // Change quantity to 3
      CartPage.changeQuantity(3);

      // Capture updated price
      CartPage.getPrice().then((updatedPrice) => {
        const updatedAmt = parseFloat(updatedPrice.replace('$', ''));
        cy.log(`Initial: ${initialAmt}, Updated: ${updatedAmt}`);

        // Verify updated price increased
        expect(updatedAmt).to.be.greaterThan(initialAmt * 2);
      });
    });
  });

});
