/// <reference types="Cypress" />
/*Para guardar las cookies, pero toca revisar en que version esta disponible.
Cypress.Cookies.defaults({
    preserve: "nombre",
});
*/
describe("Cookies", () => {


    //Cypress borras la cookies en cada prueba
    it('Obtener cookies', () => {
        cy.visit("/")
        cy.getCookies().should("be.empty")
    });

    it('Crear una cookie', () => {
        
        cy.setCookie('Amir','Javier')
        cy.getCookies().should('have.length', 1)
    });

    it('Obtener una cookies', () => {
        cy.getCookie('nombre').should("have.a.property", "value", "Javier")
    });
});