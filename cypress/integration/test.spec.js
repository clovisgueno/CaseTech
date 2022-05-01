/// <reference types="cypress"/>

import TestHome from '../support/pages/Home';

describe('Test', () => {
    it('Click on all 3 buttons', () => {
        TestHome.clickButton();
        TestHome.clickButtonAlert();
        TestHome.clickButtonSuccess();        
    });
    it('Click on all the edit and delete buttons on the grid - By ID', () => {
        TestHome.clickEditAndDelete();
    }); 

});
