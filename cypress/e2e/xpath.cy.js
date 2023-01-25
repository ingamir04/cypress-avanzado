describe('Xpath', () => {
    
    it('Obtenerlo CSS Selector', () => {
        cy.visit("/")

        cy.get("#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1").should("contain", "Bulbasaur")
    });

    it('Obtenerlo Xpath', () => {
        cy.visit("/")
        cy.xpath("//h1[contains(text(), 'Bulbasaur')]").should("contain", "Bulbasaur")
    });
});