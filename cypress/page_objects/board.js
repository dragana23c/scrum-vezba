class Board {
    get organization(){
        return cy.get('.vs-c-media__object').eq(1)
    }

    get boardNew(){
        return cy.get("vs-c-boards-item__header--add-new").first();
    }
   get boardName(){
    return cy.get("nput [type='text']")
   }
get nextBtn() {
    return cy.get(".el-button--success").eq(1);
}
get scrumCheck(){
    return cy.get("vs-c-radio-check").first();
}
get nextBtnSecond() {
    return cy.get(".el-button--success").eq(1);
}
get nextBtnThird() {
    return cy.get(".el-button--success").eq(1);
}
get finishBtn(){
    return cy.get(".el-button--success").eq(1);
}
newBoard(){
    this.organization.click();
    this.boardNew.click();
    this.boardName.type(nameBoard)
    this.nextBtn.click();
    this.scrumCheck.check();
    this.nextBtnSecond.click();
    this.nextBtnThird.click();
    this.finishBtn.click();
}



}export const board = new Board();