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
        return prompt('song_id: ');
    })
    .then((val) => {
        results.push(val);
        return prompt('duration: ');
    })
    .then((val) => {
        results.push(val);
        console.log('response:', results);
        trackData();
        prompt.done();
    })
    .catch(function rejected(err) {
        // console.log('error:', err.stack);
        prompt.finish();
    });

function trackData() {
    var track = { album_id: results[0], song_id: results[1], duration: results[2] }
    var querry = `INSERT INTO track (album_id, song_id, duration) VALUES (${album_id}, ${song_id}},${duration})`;
    db.result(querry, results)
        .then((result) => {
            console.log(result);
        }).catch((e) => {
            console.error(e);
        });
    pgp.end();
}