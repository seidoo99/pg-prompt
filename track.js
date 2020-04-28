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
prompt('album_id: ')
    .then((val) => {
        results.push(val);
        return prompt.multiline('song_id: ');
    })
    .then((val) => {
        results.push(val);
        return prompt.multiline('duration: ');
    })
    .then((val) => {
        results.push(val);
        console.log('response:', result);
    })
    .catch(function rejected(err) {
        // console.log('error:', err.stack);
        prompt.finish();
    });

var querry = `insert into album(album_id, song_id, duration) values(${results[0]}, ${results[1]},${results[2]})`;
db.result(querry, results)
    .then((result) => {
        console.log(result);
    }).catch((e) => {
        console.error(e);
    });
pgp.end();