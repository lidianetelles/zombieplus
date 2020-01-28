module.exports = {
    '@tags': ['smoke'],

    'login com sucesso': (browser) => {

        let login = browser.page.login()
        let sideBar = browser.page.sideBar()

        login.with('zumbi@dospalmares.com.br', 'pwd123')
        sideBar.expectLoggedUser('Quilombo')
    }    
}

    // 'login com sucesso': function (browser) {
    //     var userInfo = '.user .info span'
    //     browser
    //         .url('http://zombie-web:5000/login')
    //         .waitForElementVisible('.card-login', 3000)
    //         .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
    //         .setValue('input[name=password]', 'pwd123')
    //         .click('.login-button')
    //         .waitForElementVisible(userInfo, 3000)
    //         .assert.containsText(userInfo, 'Quilombo')
    //         .end();
    // },
    // 'dado que eu acesso a pagina de login': function(browser){
    //     browser
    //         .url('http://zombie-web:5000/login')
    //         .waitForElementVisible('.card-login', 3000)
    // },
    // 'quando faço login com sucesso': function(browser){
    //     browser
    //         .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
    //         .setValue('input[name=password]', 'pwd123')
    //         .click('.login-button')
    // },
    //  'então devo ver o meu nome na área logada': function(browser){
    //     var userInfo = '.user .info span'
    //     browser
    //         .waitForElementVisible(userInfo, 3000)
    //         .assert.containsText(userInfo, 'Quilombo')
    //         .end();