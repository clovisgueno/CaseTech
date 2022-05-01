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
        cy.get(el.buttonEditGrid)
        .should('have.length', el.totalRegisters)
        .click({ multiple: true })
        .url()
        .should('be.equal', el.urlEditGrid);   
    }

    clickAllDeleteGrid(){
        cy.get(el.buttonDeleteGrid)
        .should('have.length', el.totalRegisters)
        .click({ multiple: true })
        .url()
        .should('be.equal', el.urlDeleteGrid);   

    }

    ClickEditAndDelete(){
        var children = el.totalRegisters;
        for (var i = 0; i < children; i++) {

            cy.contains('tbody tr', el.idPrefix + i) 
            .contains(el.labelEdit)   
            .click();
            cy.url().should('be.equal', el.urlEditGrid)

            cy.contains('tbody tr', el.idPrefix + i)  
            .contains(el.labelDelete)   
            .click();
            cy.url().should('be.equal', el.urlDeleteGrid)

        }
           

        cy.get(el.buttonEditGrid)
        .log('have.length');
        
    }
    

}

export default new TestHome();

