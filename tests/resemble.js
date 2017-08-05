'use strict';

var chai = require('chai'),
    resemble = require('chai-resemble');

var expect = chai.expect;

chai.use(resemble);

describe('Pages should resemble the reference', function () {
    it('Bootstrap', function (done) {
        expect('tests/output/bootstrap/jumbotron.html')
            .to.resemble('https://getbootstrap.com/examples/jumbotron/', done);
    });

    it('GitHub pages', function (done) {
        expect('tests/output/gh-pages/index.html')
            .to.resemble('https://giakki.github.io/uncss/', done);
    });

    it('Selectors', function (done) {
        expect('tests/selectors/index.html')
            .to.resemble('tests/output/selectors/index.html', done);
    });
});
