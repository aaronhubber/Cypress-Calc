describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working artitmatic functions +', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should have working artitmatic functions -', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working artitmatic functions *', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('should have working artitmatic functions /', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to chain multiple aritmatic functions', () =>{
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '4')
  })

  it('should be able to add multiple arithmatic functions', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should have working artitmatic functions for decimal places', () => {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7.3')
  })

  it('should handle very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '200000')
  })

  it('should handle negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should demonstrate an exceptional circumstance, 10/0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Infinity Never!!')
  })
})

