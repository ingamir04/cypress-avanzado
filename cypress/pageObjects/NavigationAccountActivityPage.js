export class NavigationAccountActivityPage {

  constructor() {
    this.account_sumary_tab_link = "#account_activity_tab"

    this.tabs = {
      show_transactions_label:  "#tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active > a",
      fiend_transactions_label: "#tabs > ul > li:nth-child(2) > a",
    }

  }

  validarShowTransactions(){
    cy.get(this.tabs.show_transactions_label).should("be.visible")
    cy.get(this.tabs.fiend_transactions_label).should("be.visible")
  }

  ir_a_ShowTransactions(){
    cy.get(this.account_sumary_tab_link).click()
  }
}
export const navigationAccountActivityPage = new NavigationAccountActivityPage()