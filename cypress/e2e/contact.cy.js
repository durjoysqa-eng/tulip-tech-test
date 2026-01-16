import ContactPage from '../contactPages';

describe('Contact Form Validation', () => {

  beforeEach(() => {
    ContactPage.visit();
  });

  it('Should show validation errors when submitting empty form', () => {
    ContactPage.submitEmptyForm();

    ContactPage.elements.firstNameError()
      .should('be.visible')
      .and('contain', 'First name is required');

    ContactPage.elements.lastNameError()
      .should('be.visible')
      .and('contain', 'Last name is required');

    ContactPage.elements.emailError()
      .should('be.visible')
      .and('contain', 'Email is required');

    ContactPage.elements.subjectError()
      .should('be.visible')
      .and('contain', 'Subject is required');

    ContactPage.elements.messageError()
      .should('be.visible')
      .and('contain', 'Message is required');
  });

 it('Should submit form successfully with valid data', () => {
  ContactPage.fillContactForm({
    firstName: 'Naimor',
    lastName: 'Durjoy',
    email: 'naimor@test.com',
    subject: 'customer-service',
    message: 'This is a Cypress automation test message written to checkkkkkkkkk the minimum fifty character requirement.!!!!!!!!!!!!!!!!!!!!'
  });

  ContactPage.submit();

  cy.contains('Thanks for your message').should('be.visible');
});
 

});
