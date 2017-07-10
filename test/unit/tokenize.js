var test = require('tap').test;
var tokenize = require('../../lib/tokenize');

test('spec', function (t) {
    t.type(tokenize, 'function');
    t.type(tokenize('foo'), 'object');
    t.equal(tokenize('foo bar').length, 2);

    t.throws(function () {
        tokenize(123);
    });
    t.throws(function () {
        tokenize({});
    });
    t.throws(function () {
        tokenize([]);
    });

    t.end();
});

test('polish', function (t) {
    t.deepEqual(
        tokenize('Kot przeszedł przez ścianę.'),
        ['Kot', 'przeszedł', 'przez', 'ścianę']
    );
    t.deepEqual(
        tokenize('To spowoduje problemy świniom farmera.'),
        ['To', 'spowoduje', 'problemy', 'świniom', 'farmera']
    );
    t.end();
});

test('diacritic', function (t) {
    t.deepEqual(
        tokenize('To podejście jest naiwne.'),
        ['to', 'podejście', 'jest', 'naiwne']
    );
    t.deepEqual(
        tokenize('Suflet był wyborny!'),
        ['suflet', 'był', 'wyborny']
    );
    t.end();
});
