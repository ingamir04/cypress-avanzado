let texto
describe('Seguridad', () => {
    
    it('Navegar entre diferentes dominios', () => {
        
        cy.visit("/")
        cy.visit("https://todo-cypress-iota.vercel.app")
        
        cy.get("#title").type("Titulo de prueba")

        
    });

    //Se pouede guardar informacion de una prueba a otra si el domoinimo es el mismo
    it('Navego a un dominio', () => {
        cy.visit("https://todo-cypress-iota.vercel.app")
        cy.get("h1").invoke("text").as('titulo')

    });
    it('Navego a otro dominio', () => {
        cy.visit("https://todo-cypress-iota.vercel.app")
        cy.log(this.titulo)
    });

    it('Navego en dos dominios en el mismo test', () => {
        
        cy.visit("/")

        cy.get("h1")
            .first()
            .invoke("text")
            .then((text)=>{
                Cypress.env({
                    textito: text
                })
                //texto = text
            })

        cy.origin(
            "https://todo-cypress-iota.vercel.app",
            { args: {texto: "Hola"}},
            function ({texto}) {
                cy.visit("/")
                cy.log(texto);
                cy.log(Cypress.env());
            }
        )
        //Es importante regresar a la pagina de origen si no da error
        cy.visit("/")
        
        cy.get("h1").first().invoke("text").should("be.equal", Cypress.env('textito'));
    });

    it.only('Compartir informacion sin usar el session', () => {
        cy.visit("/")
        cy.get("h1")
            .first()
            .invoke("text")
            .then((text)=>{
                cy.task("guardar", {texto: text})
            })
    });
    it.only('Compartir informacion sin usar el session 2', () => {
       
        cy.visit("https://todo-cypress-iota.vercel.app")
        cy.task("obtener", "texto").then(valor=>{
            cy.get("#title").type(valor)
        })

    });
});