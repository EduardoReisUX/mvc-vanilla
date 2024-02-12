describe("Homepage", () => {
  it("should create, read, update and delete todos", () => {
    cy.visit("http://localhost:8000/");

    // Should enter values (create)
    cy.get(".data-section__input").type("Ninjutsu{enter}");
    cy.get(".data-section__input").type("Genjutsu{enter}");
    cy.get(".data-section__input").type("Taijutsu{enter}");
    cy.get(".data-section__input").type(
      "This task should not be completed nor deleted!{enter}"
    );
    cy.get(".data-section__input").type(
      "This task should be completed and not deleted!{enter}"
    );

    // Should toggle todos as completed (read and update)
    cy.get(".data-completed__1 > input").click();
    cy.get(".data-completed__2 > input").click();

    // Should remove one selected todo (delete)
    cy.get(".data-remove__0 > button").click();

    // Should remove all completed todos (delete)
    cy.get(".data-section__delete-button").click();

    // Toggle task that should be completed and not deleted
    cy.get(".data-completed__1 > input").click();

    // Assert if remaining tasks are there.
    cy.contains("This task should not be completed nor deleted!").should(
      "be.visible"
    );
    cy.contains("This task should be completed and not deleted!").should(
      "be.visible"
    );
  });
});
