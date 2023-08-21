/// <reference types="Cypress"  />

describe('Kongapay Test Suite', function()
{

it('Login Test case',function() {
//test step

cy.visit("https://staging.kongapay.com/")
cy.wait(3000)
cy.get ('.navbar-right > :nth-child(1) > a').trigger('mouseover').click();
cy.get ('#phone').click().type('08140058257')
cy.get('#password').click().type('1982')
cy.get('.btn').click()
cy.wait(3000)
cy.url().should('eq', 'https://staging.kongapay.com/app/dashboard')

//cy.get('.alert').should('hav, 'Login successful. You will be redirected shortly')
//cy.wait(10000)
//cy.on('window:alert', (message) => {
    // Assert the alert message
    //expect(message).to.include('Login successful. You will be redirected shortly');
  //});

//.and('have.value', 'Login successful. You will be redirected shortly')

//cy.on('window:alert', (str)=>
//{
//expect(str).to.equal('Login successful. You will be redirected shortly')

//})

})

})