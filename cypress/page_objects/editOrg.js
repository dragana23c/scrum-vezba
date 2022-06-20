class EditOrg  {
get myOrgTitle() {
  return cy.get(".vs-c-my-organization__header").first();
}
  get editButton(){
    return cy.get(".vs-c-icon--edit")
  }
get nameInpt() {
    return cy.get("[name='name']")
}
 get chechBtn() {
    return cy.get(".el-button").first();
 }
 edit(title){;
   
   this.editButton.click
 }
 editor(title) {
    this.myOrgTitle.find();
    this.editButton.click();
    this.changeName.type(newName);
    this.checkBtn.check();
 }
}
export const editOrg =  new EditOrg ();