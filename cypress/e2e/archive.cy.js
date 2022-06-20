import{arcive} from "../page_objects/archiveOrg"
import{scrumLogin} from "../page_objects/scrumLogin"
import{organization} from"../page_objects/organization"
import{editOrg} from "../page_objects/editOrg"


describe("Archive organization test", () => {
  let orgId;
  beforeEach("visit my organizations page", () => {
    cy.visit("/login");
    scrumLogin.login("dragana@mail.com", "test123");
    cy.wait(3000);
    cy.visit("/my-organizations");
    cy.url().should("include", "/my-organizations");
  });

  it("archive organization", () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    }).as("create");

    organization.create("test");

    cy.wait("@create").then((interception) => {
      orgId = interception.response.body.id;
      expect(interception.response.statusCode).eq(201);

      it("archive organization", () => {
        cy.intercept({
          method: "PUT",
          url: `https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/${orgId}/status`,
        }).as("archive");
        cy.get("vs-c-my-organization__title").should('have.text', test);
        cy.get(".vs-c-icon--archive")
          .first()
          .invoke("show")
          .click({ force: true });
        cy.get(".vs-u-text--right > button").last().click();

        cy.wait("@archive").then((interception) => {
          expect(interception.response.statusCode).eq(200);
        });
      });
    });
  });
});
