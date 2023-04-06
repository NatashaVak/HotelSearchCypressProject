///<reference types = "Cypress"/>

describe('The flight tab test will verify the flights functionality', () => {
    const flights_tab = '[data-cy="Flight"]'
    // const origin_placeholder = '[placeholder="City or airport"][name="origin"]';
    const origin_placeholder = '[name="origin"]';
    const destination_placeholder = '[name="destination"]';
     const chekin = '#input-start-2';
     const chekout = '#input-end-2';
const business_radio_button = '[id="business"]'
const economy_radio_button = '[id="economy"]'
const f_class_radio_button = '[id="f_class"]'


    before(() => {
        cy.visit('http://localhost:3000/')

    })
    beforeEach(() => {
        cy.get(flights_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })

    it('navigate to the flights tab', () => {
        cy.get('[data-cy="Flight"]').should("be.visible").click()
        cy.get(origin_placeholder).should("be.visible")
        cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
        cy.get(flights_tab).invoke('text').should('eq', 'flight')

    })

    it('populates origin and destination', () => {
        cy.get(origin_placeholder).type("Paris").invoke("val").should('eq', 'Paris')
        cy.get(destination_placeholder).type("London").invoke("val").should('eq', "London")

        // cy.get(origin_placeholder).invoke("val").should('eq', 'Paris')
        // cy.get(destination_placeholder).invoke("val").should('eq',"London")
    })

    it('populates check-in and check-out dates', () => {
        cy.get(chekin).clear();
        cy.get(chekin).type("10/10/2025").invoke('val').should('eq',"10/10/2025" )
        cy.get(chekout).clear();
         cy.get(chekout).type("10/10/2026").invoke('val').should('eq',"10/10/2026" )


    })
    it('check radio buttons', () => {
        cy.get(business_radio_button).click().should('be.checked')
        cy.get(economy_radio_button).click().should('be.checked')
        cy.get(f_class_radio_button).click().should('be.checked')

})

})