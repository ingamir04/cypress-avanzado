describe('Test localstorage', () => {

    //Preservar el locaStorage
/*
    beforeEach(()=>{

        cy.session("seccion todo", ()=>{
            cy.visit('https://todo-cypress-iota.vercel.app/').then(()=>{
                localStorage.setItem("rect_todo_ids", JSON.stringify(["Titulo de prueba"]));
                localStorage.setItem("Titulo de prueba", JSON.stringify({
                    title: "Titulo de prueba",
                    id: "Titulo de prueba",
                    complete: false,
                    description: "Descripcion de una prueba"
            }))
            })
        })
        cy.visit('https://todo-cypress-iota.vercel.app/')

    })
    */
    it('Crear una taera', () => {
        cy.visit('https://todo-cypress-iota.vercel.app/')
        cy.get("#title").type("Titulo de prueba")
        cy.get("#description").type("Descripcion de prueba")
        cy.contains("Create").click()
  
        cy.contains("Titulo de prueba")
  
        cy.reload()
  
        cy.contains("Titulo de prueba").then(()=>{
          expect(localStorage.getItem("Titulo de prueba")).to.exist
        })


        cy.contains("Remove").click().then(()=>{
            expect(localStorage.getItem("Titulo de prueba")).to.not.exist
          })

          //Limpiar localstorage
       //   cy.clearLocalStorage("Titulo de prueba").should(ls =>{
       //   expect(ls.getItem("prop1")).to.be.null
        //  })
      })
/*
      it('Validar tarea otro test', () => {
        cy.visit('https://todo-cypress-iota.vercel.app/')
        expect(localStorage.getItem("Titulo de prueba")).to.exist
      });
      */
});