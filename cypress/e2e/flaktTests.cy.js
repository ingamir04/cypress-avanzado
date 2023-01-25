//Flaky: Son pruebas inestables a veces corre o tras no
describe('Flak Tests', () => {
    
    it.only('Single query commans', () => {
        cy.visit("/")
        //cy.get("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1").contains("contain", "Bulbaaasaur")

        //Para elementos dinamicos
        //cy.contains("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1", "Bulbaaasaur");
    });

    it('Alternar comando con aserciones', () => {
        cy.visit("/")

        //cy.get("#submit").click()

        //Reitentara el get hasta que lña asersion pase y luego le dara click()
        //cy.get("#submit").should("not.be.disabled").click()


        cy.get("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1")
        .should("contain", "Bulbasaur")
        .parent()
        .should("have.class", "card-header")
    });
});