import { LoginPage, loginPage } from "../pageObjects/LoginPage";

describe('Login con POM', () => {
   
    beforeEach(()=>{
        loginPage.visit();
    })

    it('Login erroneo', () => {
        loginPage.validarLogiPage()
        loginPage.login("lslalsls","slalslsla")
        loginPage.validarErrorLogin()
    });

    it('Login exitoso', () => {
        //La web tiene errores
        loginPage.validarLogiPage()
        loginPage.login("username","password")
       
        cy.wait(20000);
        loginPage.validarLoginExitoso()
    });

    it('Login exitoso con cy.env', () => {
        //La web tiene errores
        loginPage.validarLogiPage()

        cy.log(Cypress.env());
        loginPage.login(Cypress.env("credentials").user, Cypress.env("credentials").password)
        //loginPage.validarLoginExitoso()
    });

    it('Login exitoso con cy.env.JSON', () => {
        //La web tiene errores
        loginPage.validarLogiPage()

        //El archivo cypress.env.Json sobresescribne los datos configurados en cypress.config
        cy.log(Cypress.env());
        loginPage.login(Cypress.env("credentials").user, Cypress.env("credentials").password)
        loginPage.validarErrorLogin()
    });

    it('Login erroneo desde la terminal', () => {
        //La web tiene errores
        loginPage.validarLogiPage()

        //El archivo cypress.env.Json sobresescribne los datos configurados en cypress.config
        cy.log(Cypress.env());
        loginPage.login(Cypress.env("credentials").user, Cypress.env("credentials").password)
        loginPage.validarErrorLogin()
    });
});


describe('Login erroneo con configuracion',{
    //Solo para este describe van a estar disponible las variables
    env: {
        userErroneo: "erro1",
        passwordErroneo: "error2"
    }
    },() => {
    
        beforeEach(()=>{
            loginPage.visit()
        })
    
    it('login erroneo', () => {

        loginPage.validarLogiPage()
        cy.log(Cypress.env())

        loginPage.login(
            Cypress.env("userErroneo"),
            Cypress.env("passwordErroneo")
        )
        loginPage.validarErrorLogin()
    });

});

//Manejo de dato
describe('Login con fixtures', () => {
    
    beforeEach(()=>{
        loginPage.visit()
    })
    it('Login erroneo dato', () => {
        loginPage.validarLogiPage()

        //Nombre del archivo
        cy.fixture("credential").then(credentials =>{

            loginPage.login(credentials.email, credentials.password)
        })

        loginPage.validarErrorLogin()
    });

    it('Login erroneo 2 dato', () => {
        loginPage.validarLogiPage()

        //Nombre del archivo
        cy.fixture("usuarios").then(credentials =>{

            loginPage.login(credentials.email, credentials.password)
        })

        loginPage.validarErrorLogin()
    });
});

//Validar con varios usuarios
//Arreglo
const credentialForUsers = [
    {
        nombre: "credential",
        titulo: "Login con credential"
    },
    {
        nombre: "usuarios",
        titulo: "Login con Usuarios"
    }
]
credentialForUsers.forEach(credentials=>{

    describe.only(credentials.titulo, () => {
        
        beforeEach(()=>{
            loginPage.visit()
        })

        it('Login erroneo con fixtures' , () => {
            loginPage.validarLogiPage()

            cy.fixture(credentials.nombre).then(credentials =>{

                loginPage.login(credentials.email, credentials.password)
            })

        });
    });
})