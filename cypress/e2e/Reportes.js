//Se necesita instalar npm cypress-multi-reporters

//npm i junit-report-merger

//npm i mocha-junit-reporter

//npm i mocha-junit-reporter --force

//npm i mochawesome

//npm i mochawesome-merge --force
////
///npm i mochawesome-report-generator --force

//Se debe crear el archivo de confiuguracion para los reportes este es "reporter-config.json"

//Los comandos se van a ir ejecuando dependiendo del reporte que se necesita

/*
    "delete:results": "rm -r cypress/results/* || true",
    "report": "cypress run --reporter cypress-multi-reporters --reporter-options configFile=reporter-config.json",
    "mochawesome:report": "npx mochawesome-merge \"cypress/results/mochawesome/*.json\" > mochawesome.json && npx marge mochawesome.json",
    "junit:reports": "jrm cypress/results/junit/combined-report.xml \"cypress/results/junit/*.xml\""
 */

/*
  npm i @shelex/cypress-allure-plugin
 */