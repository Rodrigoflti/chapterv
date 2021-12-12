/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
// HOOK - Trechos que devem ser executados antes ou depois do teste
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessarOFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarSeOArtigoFoiCriado()
  })
})
// Rodrigo1
// chapterv12345@mail.com
// 12345
