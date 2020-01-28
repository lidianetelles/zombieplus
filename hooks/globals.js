module.exports = {
    beforeEach: (browser, done) => {
        done()
    },

    afterEach: (browser, done) => {
        browser.end();
        done()
    },
}