//Probar la UI cuando se realizan cambios visuales que aveces son impredecibles
//Es un pluyin ya que no es nativo de Cypress
//npm i -D cypress-image-snapshot --legacy-peer-deps
//Ajustar archivo de config
//Cuando se ejecuta crear la carpeta Snapshot

describe('Visual Testing', () => {
    
    it('Mi primer prueba de regresion', () => {
        
        cy.visit("/")

        cy.wait(1000);
        cy.scrollTo("bottom")

        cy.matchImageSnapshot()

    });

    it('Segunda prueba a un solo elemento', () => {
        cy.visit("/")
        cy.contains("Bulbasaur").should("be.visible").matchImageSnapshot();
    });
});