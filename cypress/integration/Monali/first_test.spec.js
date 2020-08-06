//describe --> name of the test suit
describe('First test suit', function() {

    //it--test case 1
    it('Verify title of page-positive', function() {

        //we can have mutiple steps
        cy.visit('https://monalimd.github.io/')
        cy.title('eq', 'Monali Wijesinghe')
    })
})