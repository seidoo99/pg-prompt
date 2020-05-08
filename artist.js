const config = {
    host: 'localhost',
    username: 'postgres',
    database: 'music',
    port: 5432
}
const pgp = require('pg-promise')();
const db = pgp(config);
var prompt = require('prompt-promise');
var results = [];
prompt('artist_name: ')
    .then((val) => {
        results.push(val);
        artistData();
        prompt.done();
        // console.log('response:', results);
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });
return results;

function artistData() {
    var artist = { artistName: results[0] }
    var query = `INSERT INTO artist (artist_name) VALUES (${artistName})RETURNING id`;
    db.result(querry, artist)
        .then((result) => {
            console.log(result);
        }).catch((e) => {
            console.error(e);
        });
    pgp.end();
}