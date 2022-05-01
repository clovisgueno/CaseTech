/// <reference types="cypress"/>

import TestHome from '../support/pages/Home';

describe('Test', () => {
    it.skip('Click on all 3 buttons', () => {
        TestHome.clickButton();
        TestHome.clickButtonAlert();
        TestHome.clickButtonSuccess();        
    });
    it('Click on all the edit and delete buttons on the grid - By ID', () => {
        TestHome.ClickEditAndDelete();
    }); 
    it.skip('Click on all the edit and delete buttons on the grid - Multiple clicks', () => {
        TestHome.clickAllEditGrid();
        TestHome.clickAllDeleteGrid();
    }); 
});
