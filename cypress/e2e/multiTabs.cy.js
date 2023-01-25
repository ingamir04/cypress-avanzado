describe('Navegando entre diferentes Tbs', () => {
    
    it('Visitar links que tenga el target _blank', () => {
        
        cy.visit("https://demoqa.com/links")
        cy.get("#simpleLink").click()
    });

    it.only('abrir la pagina en la misma pantalla', () => {
        
        cy.visit("https://demoqa.com/links")
        
        //Remover atributos de link para abrir en el mismo tag
        cy.get("#simpleLink").invoke("removeAttr", "target").click()
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
});