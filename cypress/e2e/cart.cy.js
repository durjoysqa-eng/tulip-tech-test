import CartPage from '../cartPage'; // adjust the path to your file

describe('Add to Cart and Update Quantity', () => {

  it('Should update price when quantity changes', () => {
    cy.viewport(1920, 1080);
    cy.visit('/product/01KF37CWV12ES8C9CSDRSZRKNS');

    // ✅ Add product to cart and navigate to cart
    CartPage.addProductToCart();
    cy.wait(20000)

    // Capture initial price
    CartPage.getPrice().then((initialPrice) => {
      const initialAmt = parseFloat(initialPrice.replace('$', ''));

      // Change quantity to 3
      CartPage.changeQuantity(3);

      // Verify updated price is greater than initial
      CartPage.getPrice().then((updatedPrice) => {
        const updatedAmt = parseFloat(updatedPrice.replace('$', ''));
        expect(updatedAmt).to.be.greaterThan(initialAmt * 2);
      });
    });
  });

});
