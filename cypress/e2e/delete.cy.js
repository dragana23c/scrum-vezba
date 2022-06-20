//import { createPage } from  "../page_objects/createPage";
import {scrumLogin } from "../page_objects/scrumLogin";
const faker = require ('@faker-js/faker')
import { deletePage } from "../page_objects/deletePage";
describe('delete organization', ()=> {
    let validName = faker.random.alpha({ count: 5 });
    let orgId;
    before('login',()=>{
        cy.visit('/')
        scrumLogin.login('dragana@mail.com', 'test123')
        cy.url().should('not.include', '/login');
    })
    it('delete org',()=>{
        cy.intercept({
            method: 'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/*'
        }).as('deleteOrg')
        deletePage.delete(validName)
        cy.wait('@deleteOrg').then(interception => {
            orgId = interception.response.body.id
            expect(interception.response.body.name).not.eq(validName)
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(201)
          })
    })
})