
const el = require('./elements').ELEMENTS

// Constante com o nome do artigo para asserções adicionando um data para que o nome do artigo sempre seja diferente
const articleName = 'Artigos sobre Cypress' + new Date().getTime()

class Articles {
  // acesso ao form
  acessarOFormulario () {
    // * = para pegar o href que contenha o texto editor
    cy.get(el.linkNovoArtigo).click()
  }

  /* Preenche o formulario */
  preencherFormulario () {
    // $ = so que ver o que termina com o texto ex title
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descrição do artigo sobre Cypress ')
    cy.get(el.inputBody).type('Corpo do artigo sobre Cypress e testes')
    cy.get(el.inputTag).type('cypress')
  }

  /* Submente o formulario */
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  /* Verifica se o artigo foi criado */
  verificarSeOArtigoFoiCriado () {
    // Duas formas de asserções
    cy.contains(articleName).should('be.visible')

    // Verifica o h1 html se contem o texto
    // cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
