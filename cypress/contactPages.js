class ContactPage {
  elements = {
    firstName: () => cy.get('[data-test="first-name"]'),
    lastName: () => cy.get('[data-test="last-name"]'),
    email: () => cy.get('[data-test="email"]'),
    subject: () => cy.get('[data-test="subject"]'),
    message: () => cy.get('[data-test="message"]'),
    attachment: () => cy.get('[data-test="attachment"]'),
    submitBtn: () => cy.get('[data-test="contact-submit"]'),

    firstNameError: () => cy.get('[data-test="first-name-error"]'),
    lastNameError: () => cy.get('[data-test="last-name-error"]'),
    emailError: () => cy.get('[data-test="email-error"]'),
    subjectError: () => cy.get('[data-test="subject-error"]'),
    messageError: () => cy.get('[data-test="message-error"]')
  };

  visit() {
    cy.visit('/contact');
  }

  submitEmptyForm() {
    this.elements.submitBtn().click();
  }

  fillContactForm({ firstName, lastName, email, subject, message }) {
    this.elements.firstName().type(firstName);
    this.elements.lastName().type(lastName);
    this.elements.email().type(email);
    this.elements.subject().select(subject);
    this.elements.message().type(message);
  }

  submit() {
    this.elements.submitBtn().click();
  }
}

export default new ContactPage();
