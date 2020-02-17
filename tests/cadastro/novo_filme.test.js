import pg from '../../lib/db'

let movieData = {}

module.exports = {

    before: function (browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year:  2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovich', 'Ali Larter', 'Ian Glen', 'Shawn Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sideBar = browser.page.sideBar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        sideBar.expectLoggedUser('Quilombo')
    },

    'quando eu faço o cadastro do filme': function (browser) {
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
            .pause(5000)
    },
    'então devo ver o filme na lista': function(browser) {
        let movie = browser.page.movie()


        // Visible => Procura o elemento da página, mas também procura pelo Atributo Display

        // Present => Verifica se o elemento está na página (em algum lugar da página)

        

        movie
            .waitForElementPresent('@list', 15000)
            .assert.containsText('@list', movieData.title)
    }
}