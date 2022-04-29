/// <reference types="cypress"/>

import TestHome from '../support/pages/Home';

describe('Test', () => {
    it('Deve efetuar um clique em todos os 3 botões', () => {
        TestHome.clickButton();
        TestHome.clickButtonAlert();
        TestHome.clickButtonSuccess();        
    });
    it('Deve clicar em todos os botões edit e delete da grid', () => {
        TestHome.clickAllEditGrid();
        TestHome.clickAllDeleteGrid();
    }); 

});
