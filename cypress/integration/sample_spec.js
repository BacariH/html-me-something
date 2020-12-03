// describe('My first test', function() {
//     it('Does not do much', function() {
//         expect(true).to.equal(true)
//     })
// })



// Arrange - setup inital app state
// -visit a page
// -query an element
// Act - take action
// -interact with it
// Assert - make an assertion
// - make an assertion about page content

describe('My first test', function () {
    it('Visits the kitchen sink', function() {
        cy.visit('https://example.cypress.io')
        cy.pause()
    });

    it('Finds an element', function() {
        cy.contains('type').click();
        cy.url()
            .should('include', '/commands/actions');
    });

    it('Gets, types and asserts', function(){
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com');
    })
});