class ArchiveOrg {
    get organization() {
        return cy.get(".vs-c-my-organization__header").first();
      }
    
      get yesBtn() {
        return cy.get(".vs-u-text--right > button").last();
      }

archive(){
  this.organization.click();
  this.yesBtn.clcik();
}
}   
    export const archiveOrg = new ArchiveOrg();
    
    
    
    
    