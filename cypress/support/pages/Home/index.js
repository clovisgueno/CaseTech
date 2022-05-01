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
        .click()
        .should('have.focus');
    }

    clickButtonSuccess(){
        cy.get(el.buttonSuccess)
        .should('be.visible')
        .click()
        .should('have.focus');
    }

    clickEditAndDelete(){
        var listLength = el.totalRegisters;

        for (var i = 0; i < listLength; i++) {
            cy.contains('tbody tr', el.idPrefix + i) 
            .contains(el.labelEdit)   
            .click();
            cy.url().should('be.equal', el.urlEditGrid);

            cy.contains('tbody tr', el.idPrefix + i)  
            .contains(el.labelDelete)   
            .click();
            cy.url().should('be.equal', el.urlDeleteGrid);
        }

    } 

}

export default new TestHome();

