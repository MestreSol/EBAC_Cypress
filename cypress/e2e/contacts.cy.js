describe('template spec', () => {
  it('Page Exists', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  it('Try add new contact', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get('[type="text"]').type('Teste')
    cy.get('[type="email"]').type('Test@test')
    cy.get('[type="tel"]').type('123456789')
    cy.get('.adicionar').click()

    //Pesquisa se o contato foi adicionado
    cy.get(':nth-child(5)').should('contain', 'Teste')
  });

  it('Try Update contact', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
      cy.get('[type="text"]').clear().type('Teste2')
    cy.get('[type="email"]').clear().type('Test2@test')
    cy.get('[type="tel"]').clear().type('987654321')
    cy.get('.alterar').click()

    //Pesquisa se o contato foi atualizado
    cy.get(':nth-child(5)').should('contain', 'Teste2')
  });

  it('Try Delete contact', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
    cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
  });
})