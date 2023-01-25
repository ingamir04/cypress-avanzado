/*
const test={
    {viewport:'iphone', type: 'Deskopt'},
    {viewport:'iphoned', type: 'Deskoptd'},
    {viewport:'iphone', type: 'Deskopt'}
}
*/

describe('Dispositivos Moviles', () => {
    it('Usado Viewport', () => {
        cy.viewport(1280,720)
        cy.visit("/")

        cy.contains("Safari").should("exist")
    });

    it('Usado Viewport movil', () => {
        cy.viewport(375,667)
        cy.visit("/")

        cy.contains("Safari").should("not.be.visible")
    });

    it('Usado Viewport desktop presert', () => {
        cy.viewport("macbook-15")
        cy.visit("/")

        cy.contains("Safari").should("exist")
    });

    it('Usado Viewport movil', () => {
        cy.viewport("iphone-xr")
        cy.visit("/")
        cy.contains("Safari").should("not.be.visible")
    });
});