/*Sessio on yksinkertaisin tapa reittien suojaukseen
  Toimii perinteisissä sovelluksissa mutta ei kunnolla
  SPA-sovelluksissa
*/
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
let sess;

// sovelluksen juuri on osoitteessa http://localhost:3000
// Kun mennään sovelluksen juureen, katsotaan ollanko jo kirjauduttu
router.get('/', function (req, res, next) {
    sess = req.session; // laitetaan sessio-olio muuttujaan sess
    // jos sessio on voimassa ja ollaan kirjauduttu mennään suoraan sovelluksen ekalle sivulle
    if (sess.pass === 'qwerty') {
        res.redirect('/sivu1'); // salasanalla suojattu sivu
    } else { // muuten mennään kirjautumaan
        res.render('index', { // kirjautumissivu
            title: 'Express sessioesimerkki',
            errors: req.session.errors // laitetaan sivulle menemään mahdolliset virheet
        });
        req.session.errors = null; // tyhjennetään vanhat virheet sessiosta
    }
});

/*
kirjautumisdatan vastaanotto on post-tyyppinen eli vastaanotetaan
post-metodilla lähetettyä dataa
*/
router.post('/', function (req, res) {
    sess = req.session; // sessio talteen
    // tarkistetaan sisääntuleva data validaattorin checkBody -metodilla
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('pass', 'Password is required').notEmpty();
    // Salasana on kovakoodattu tähän yksinkertaisuuden vuoksi.
    // Seuraavissa tehtävissä se tulee kannasta ja on kryptattu
    req.checkBody('pass', 'Password is wrong.').equals('qwerty');

    const errors = req.validationErrors();
    // console.log(errors);
    // jos on validaatiovirheitä, pysytään kirjautumissivulla
    if (errors) {
        sess.errors = errors; // virheet sessioon josta ne voidaan näyttää kirjautumissivulla
        res.redirect('/');
        // muuten siirrytään reittiin sivu1 jossa tarkistetaan passwordin oikeellisuus
    } else {
        // sess.success = true;
        // sess.email = req.body.email; // sess.email saa arvon login-sivulta (index.ejs)
        sess.pass = req.body.pass; // sess.pass saa arvon login-sivulta (index.ejs)
        res.redirect('/sivu1');
    }
});


//reitti sivu1-sivulle
router.get('/sivu1', function (req, res) {
    sess = req.session; //laitetaan sessio-olio muuttujaan sess
    //sivu on suojattu salasanalla. Salasana tässä kovakoodattu, mutta haetaan yleensä tietokannasta
    if (sess.pass === 'qwerty') {
        res.render('sivu1', {
            title: 'Olet nyt sessiossa sivulla sivu1!',
            sessid: sess.id
        });
    } else {
        res.render('error', { // jos passu väärä, mennään error-sivulle
            message: 'Et ole kirjautunut tai salasanasi on väärä',
        });
    }
});

//reitti sivu2-sivulle
router.get('/sivu2', function (req, res) {
    sess = req.session; // laitetaan sessio-olio muuttujaan sess
    // tätä sivua ei ole suojattu salasanalla, mutta sessiossa ollaan silti
    res.render('sivu2', {
        title: 'Olet nyt sessiossa sivulla sivu2!',
        sessid: sess.id
    }); //salainen sivu
});

//reitti sivu3-sivulle
router.get('/sivu3', function (req, res) {
    sess = req.session; // laitetaan sessio-olio muuttujaan sess
    // tätä sivua ei ole suojattu salasanalla, mutta sessiossa ollaan silti
    Student.find({}, 'name email grades.course_code grades.grade -_id', function (err, students) {
        if (err) {
            console.log(err);
        } else {
            res.render('sivu3', {
                title: 'Olet nyt sessiossa sivulla sivu3!',
                sessid: sess.id,
                title2: 'Opiskelijat',
                list: students
            });
        }
    }); //salainen sivu
});

// reitti JSON-Apiin voidaan myös suojata sessiolla
router.get('/api', function (req, res) {
    sess = req.session; // laitetaan sessio-olio muuttujaan sess
    // api on suojattu salasanalla. Tässä on kovakoodattu esimerkkiapi key: value
    if (sess.pass === 'qwerty') {
        res.json({
            key: 'value'
        });

    } else {
        res.render('error', { // jos passu väärä, mennään error-sivulle
            message: 'Et ole kirjautunut tai salasanasi on väärä',
        });
    }
});

router.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/'); //takaisin juureen eli kirjautumaan
        }
    });
});


module.exports = router;
