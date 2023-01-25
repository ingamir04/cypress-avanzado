const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin")

//Para BDD
const webpack = require("@cypress/webpack-preprocessor")
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const allureWriter = require("@shelex/cypress-allure-plugin/writer")

const values = {}

async function setupNodeEvents(on, config) {
  
    // implement node event listeners here
    addMatchImageSnapshotPlugin(on, config)

    config.env.variable = process.env.NODE_ENV ?? 'NO HAY VARIABLES';
    
    on("task",{
      guardar(valor){

        const key = Object.keys(valor)[0]
        values[key] = valor[key]

        return null       
      
      },
      obtener(key){

        console.log("values", values)
        return values[key] ?? "No hay valor"
      },
    })

    await preprocessor.addCucumberPreprocessorPlugin(on, config)

    on(
      "file:preprocessor",
      webpack({
        webpackOptions: {
          resolve: {
            extensions: [".ts",".js"],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use:[
                  {
                    loader:"@badeball/cypress-cucumber-preprocessor/webpack",
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      })
    )

  allureWriter(on, config)
    return config;
  }

module.exports = defineConfig({
  projectId: 's9qtyn',
  //Configuracion para Reportes
  /*
  report: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },

   */

  e2e: {
    baseUrl: "https://pokedexpokemon.netlify.app/",
    experimentalSessionAndOrigin: true,
    
    //Las veces que buscar el elemento
    retries:1,
    /*
    Configurar el modo de reitentos para el runMode y el OpenMode
    retries: {
      runMode: 2,
      openMode: 0,
    }*/
    setupNodeEvents,  
    env: {
      //allure: true,
      credentials:{
        user: "username",
        password: "password",
      },      
    },

    //Patron de las pruebas para las feature
    specPattern: "**/*.feature",
  },
});
