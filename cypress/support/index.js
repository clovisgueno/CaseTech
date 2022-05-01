import './commands'

beforeEach(() => {
    cy.openSite();

    Cypress.Server.defaults({
        delay: 500,
        force404: false,
        ignore: (xhr) => {
        return true;
        }
    })
});


