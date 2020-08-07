//describe --> test suit or group of tests
describe('Search functinality', function() {

    //it-->tests in cypress
    it('search by text', function() {
        //we can have mutiple steps
        cy.visit('https://www.google.com/')
        cy.get("input[name='q']").type('CSS{enter}')
        cy.get(".SPZz6b h2 span").should('have.text', 'Cascading Style Sheets')
    })
})