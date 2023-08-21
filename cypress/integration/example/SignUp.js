/// <reference types="Cypress"  />

import {Login1, SignUp} from "../pageobjects/Login1.js"
describe ('KongaPay SignUP ', ()=> {

it ('Should signup with valid credentials', ()=> {

cy.visit("https://staging.kongapay.com/")
cy.get(SignUp.hoversignup).trigger('mouseover').click({force:true})
cy.url().should('eq','https://staging.kongapay.com/signup')



})



})