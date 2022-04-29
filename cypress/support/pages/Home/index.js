
const el = require('./elements').ELEMENTS;

class TestHome{
    clickButton(){
        cy.get(el.button).should('be.visible').click();
    }

    clickButtonAlert(){
        cy.get(el.buttonAlert).should('be.visible').click();
    }

    clickButtonSuccess(){
        cy.get(el.buttonSuccess).should('be.visible').click();
    }

    clickEditGrid(){
        cy.get(el.buttonEditGrid).click({ multiple: true });
    }

    clickDeleteGrid(){
        cy.get(el.buttonDeleteGrid).click({ multiple: true });
    }

}

export default new TestHome();

