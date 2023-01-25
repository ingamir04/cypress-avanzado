describe("Cookies", () => {
    
    //Se puede preservar la cookies y si solo se neceista uan ves se saca del beaforeEach
    beforeEach(()=>{
        cy.session("login", ()=>{
            cy.visit("/")
            cy.setCookie("nombre", "Javier")
        })
    })

    it('Obtener una cookies', () => {
            cy.getCookie('nombre').should("have.a.property", "value", "Javier")
        });
    });
