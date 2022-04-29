const el = require('./elements').ELEMENTS;

class TestHome{
    clickButton(){
        cy.get(el.button)
        .should('be.visible')
        .click()
        .should('have.focus');
    }

    clickButtonAlert(){
        cy.get(el.buttonAlert)
        .should('be.visible')
        .click().
        should('have.focus');
    }

    clickButtonSuccess(){
        cy.get(el.buttonSuccess).
        should('be.visible').
        click()
        .should('have.focus');
    }

    clickAllEditGrid(){
        cy.get(el.buttonDeleteGrid)
        .should('have.length', el.totalRegisters)
        .click({ multiple: true })
        .should('have.focus');   
    }

    clickAllDeleteGrid(){
        cy.get(el.buttonEditGrid)
        .should('have.length', el.totalRegisters)
        .click({ multiple: true })
        .should('have.focus');   
    }

}

export default new TestHome();

