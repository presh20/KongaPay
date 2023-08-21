import {Login1} from "../pageobjects/Login1.js"
/// <reference types="Cypress"  />

//import {Login1} from "../pageobjects/Login1.js"

describe('Kongapay Test Suite',() => {
    


it('should login with a valid credential',() => {
  //  const login1 =new Login1
//test step

cy.visit("https://staging.kongapay.com/")

cy.get(Login1.hoverlogin).trigger('mouseover').click();
cy.get(Login1.phonenumberfield).click().type(Login1.valid_phnumber)
cy.get(Login1.passwordfield).click().type(Login1.valid_pass)
cy.get(Login1.login_button).click()
cy.wait(2000)
cy.get(Login1.login_alert).should('be.visible')
cy.url().should('eq', 'https://staging.kongapay.com/app/dashboard')

})

it ('should not login with unregistered login credential',() => {
cy.visit("https://staging.kongapay.com/")  
cy.get(Login1.hoverlogin).trigger('mouseover').click();
cy.get(Login1.phonenumberfield).click().type(Login1.Unregistered_number)
cy.get(Login1.passwordfield).click().type(Login1.Unregistered_pass)
cy.get(Login1.login_button).click()
cy.wait(3000)
cy.get(Login1.login_alert).then(function(element){

const actualText=element.text()
expect(actualText.includes('find this user profile')).to.be.true
})
//cy.get(Login1.login_alert).should('have.text','We cant find this user profile')
//We can't find this user profile

})

it ('should not login with valid phone number and invalid password' , () => {
cy.visit("https://staging.kongapay.com/")
cy.get(Login1.hoverlogin).trigger('mouseover').click()
cy.get(Login1.phonenumberfield).click().type(Login1.valid_phnumber)
cy.get(Login1.passwordfield).click().type(Login1.Invalid_pass)
cy.get(Login1.login_button).click()
//cy.get(Login1.login_alert).should('have.text', 'Login details provided are incorrect. You have 4 attempts left. Don't have a KongaPay account? Please register.')
cy.get(Login1.login_alert).then(function(element){

const actualText=element.text()
expect(actualText.includes('Login details provided are incorrect')).to.be.true
})
//Login details provided are incorrect. You have 4 attempts left. Don't have a KongaPay account? Please register.
})

})