const usernameEmail = 't@t.com';
const passwordPwd = 'Tester123!';
const firstName = 'John';
const lastName = 'Doe';

describe('Login Functionality Test', () => {
    
    //Login functionality
  it('Visits LinkedIn and logs in successfully', () => {
    cy.visit('https://www.linkedin.com/');

    cy.get(':nth-child(1) > .flex-col > .text-input').type(usernameEmail);
    cy.get(':nth-child(2) > .flex-col > .text-input').type(passwordPwd);
    cy.get('.justify-between > .btn-md').click();

    cy.url().should('include', '/feed');
    cy.get('#ember14').should('exist');
    
  });
});

describe('Logout Functionality Test', () => {
    // Logout functionality

    it('Logs in and logs out successfully', () => {
      cy.visit('https://www.linkedin.com/');
  
      cy.get(':nth-child(1) > .flex-col > .text-input').type(usernameEmail);
      cy.get(':nth-child(2) > .flex-col > .text-input').type(passwordPwd);
      cy.get('.justify-between > .btn-md').click();
  
      cy.url().should('include', '/feed');
      cy.get('#ember14').should('exist');
  
      cy.get('#ember14 > .global-nav__primary-link-text').click();
      cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click();
      cy.get('#ember175').click();

      cy.get('.nav__button-secondary').should('exist');
    });
  });

describe('Profile Editing and Saving Functionality Test', () => {
    
    // Profile editing and saving functionality
    it('Logs in and edits profile information', () => {
      cy.visit('https://www.linkedin.com/');
  
      cy.get(':nth-child(1) > .flex-col > .text-input').type(usernameEmail);
      cy.get(':nth-child(2) > .flex-col > .text-input').type(passwordPwd);
      cy.get('.justify-between > .btn-md').click();
  
      cy.url().should('include', '/feed');
      cy.get('#ember14').should('exist');
  
      // Click on the user's profile dropdown menu and select "View profile"
      cy.get('#ember14 > .global-nav__primary-link-text').click();
      cy.get('#ember16').click();

      // Wait time
      cy.wait(3000);
  
      // Click on the "Edit" button to edit profile information
      cy.get('#nameLocationAndIndustry > .category-item > .category-text-container > .category-text > .category-text__name').click();
      
      // Wait time
      cy.wait(3000);

      // Update the first name and last name fields
      cy.get('#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEJPgrABdSaXKYlypnqoWnIjTlLWB0sg-O8-firstName').clear().type(firstName);
      cy.get('#single-line-text-form-component-profileEditFormElement-TOP-CARD-profile-ACoAAEJPgrABdSaXKYlypnqoWnIjTlLWB0sg-O8-lastName').clear().type(lastName);
      
      // Wait time
      cy.wait(3000);

      // Save the changes
      cy.get('#ember82').click();

      // Wait time
      cy.wait(3000);
  
      // Verify that the changes were saved successfully
      cy.get('.text-heading-xlarge').contains(`${firstName} ${lastName}`);
    });
  });

describe('Search Functionality Test', () => {
    it('Logs in and searches for connections and profiles', () => {
      cy.visit('https://www.linkedin.com/');
  
      cy.get(':nth-child(1) > .flex-col > .text-input').type(usernameEmail);
      cy.get(':nth-child(2) > .flex-col > .text-input').type(passwordPwd);
      cy.get('.justify-between > .btn-md').click();
  
      cy.url().should('include', '/feed');
      cy.get('#ember14').should('exist');
  
      // Search for a connection by name
      cy.get('.search-global-typeahead__collapsed-search-button-text').type('John Doe{enter}');
      
      // Verify buttons on the page
      // People button
      cy.get(':nth-child(1) > .search-navigation-panel__button').should('exist');
      // Companies button
      cy.get(':nth-child(2) > .search-navigation-panel__button').should('exist');
      // Posts button
      cy.get(':nth-child(3) > .search-navigation-panel__button').should('exist');
      // More people button
      cy.get(':nth-child(4) > .search-navigation-panel__button').should('exist');
    });
  });
  
  
