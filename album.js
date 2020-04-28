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
prompt('album_name: ')
    .then((val) => {
        results.push(val);
        return prompt.multiline('artist_id: ');
    })
    .then((val) => {
        results.push(val);
        return prompt.multiline('release_year: ');
    })
    .then((val) => {
        results.push(val);
        console.log('response:', result);
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });

var querry = "insert into album(album_name, artist_id, release_year) values($1, $2, $3)";
db.result(querry, results)
    .then((result) => {
        console.log(result);
    }).catch((e) => {
        console.error(e);
    });
pgp.end();