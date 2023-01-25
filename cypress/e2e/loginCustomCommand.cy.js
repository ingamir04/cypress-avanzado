describe('Login con custom commands', () => {
    
    it('Login erroneo', () => {
        cy.login("sadasd","dasda")
    });

    it('Login erroneo', () => {
        cy.login("username","password")
    });
});