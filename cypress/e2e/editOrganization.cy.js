import{scrumLogin} from "../page_objects/scrumLogin"
import { organization } from "../page_objects/organization"
import { archiveOrg } from "../page_objects/archiveOrg";
import { editOrg } from "../page_objects/editOrg";


describe('edit org', () => {
    let orgId;
    let orgData =  {
         newName: 'test'
    } 
    beforeEach('login via backend', () => {
        cy.visit('/login')
        scrumLogin.login('dragana@mail.com', 'test123')
        
        cy.wait(3000)
        cy.visit('/my-organizations')
        cy.url().should('include', '/my-organizations')
       

    })
    it('edit', () => {
        cy.intercept({
            method:'PUT',
            url:"https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${orgId}"
        }).as('edit')
        cy.get("vs-c-my-organization organization-list-item").should('have.text', 'dragana22')
        cy.get(".vs-c-my-organization__header").should('have.text', 'dragana22')
        cy.get("[name='name']").should('have.text', 'test')
        cy.get(".vs-c-icon--edit")
        .first()
        .invoke("show")
        .click({ force: true });
        cy.get("change-organization-name").type(orgData.newName)
        cy.get(".el-button").click();
       
        cy.wait('@edit').then((interception) => {
            orgId = interception.response.body.id;
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.body.title).to.eq(orgData.title)
            cy.get("vs-c-my-organization__title").should("have.text", galleryData.title)
        })
    })

})