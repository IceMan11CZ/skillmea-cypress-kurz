beforeEach(() => {

  // arrange
  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    //alias
    .as('boardName')

})

it('premenné', function () {

  // act
  cy.get('[data-cy=board-item]')
    .click()

  // assert
  cy.get('[data-cy="board-title"]')
    .should('have.value', this.boardName)

})