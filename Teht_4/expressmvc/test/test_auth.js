// test_auth.js testitiedostossa tehdään http-pyyntöjä supertestillä ja
// testataan autentikaation toimintaa

//const expect = require('chai').expect; // tarpeeton koska supertest sisältää oman expectin
const app = require('../app');
const request = require('supertest'); // supertest-kirjastoa käytetään pyyntöjen (request) testaukseen


describe('Test authentication', function(done) {

    const user = {
        email: 'foo@bar.com',
        pass: 'qwerty'
    }
    //Tehdään login ennen testiä
    var authenticatedUser = request.agent(app);
    before(function(done) {
        authenticatedUser
            .post('/')
            .send(user)
            .expect(302) // 302 on redirect. Supertest sisältää oman expect assertin
            .expect('Location', '/sivu1')
            .end(done)
    });

    it('should return a 200 response if the user is authenticated', function(done) {
        authenticatedUser.get('/sivu3')
            .expect(200) // supertest expect
            .end(done)
    });
});
