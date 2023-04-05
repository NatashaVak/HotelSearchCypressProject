///<reference types = "Cypress"/>

const { exists } = require("graceful-fs")

describe('The booking test for travel site', () => {
    it('navigate to the main page', () => {
  cy.visit('http://localhost:56695/')
cy.url().should('eq','http://localhost:56695/' )
    })

it('verify elements of the Hotels tab are exist', () => {
    cy.visit('http://localhost:56695/')
    cy.get('#tab1 > form > :nth-child(1) > .label').should("exist")
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("exist")
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("exist")
    cy.get(':nth-child(3) > .label').should("exist")
    cy.get('[data-cy="flight_chk"]').should("exist")
    cy.get('[data-cy="cars_chk"]').should("exist")  
    cy.get('#tab1 > form > .btn-submit').should("exist")
    
})



it('verify that elements have the correct text', () => {
    cy.visit('http://localhost:56695/')
    cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to")
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text", "check-in")
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text", "check-out")
    cy.get(':nth-child(3) > .label').should("have.text","travellers")
    cy.get('[data-cy="flight_chk"]').should("not.have.text")
    cy.get('[data-cy="cars_chk"]').should("not.have.text")  
    cy.get('#tab1 > form > .btn-submit').should("have.text", "search")


    cy.contains('Going to').should("be.visible")
   
})
})