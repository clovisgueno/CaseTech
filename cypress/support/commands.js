import { URLBASE } from "./globalConf";


Cypress.Commands.add("openSite", () => {
    
    cy.visit(URLBASE);

})