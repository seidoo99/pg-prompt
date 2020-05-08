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
prompt('artist_id: ')
    .then((val) => {
        results.push(val);
        return prompt('release_year: ');
    })
    .then((val) => {
        results.push(val);
        return prompt('album_name: ');
    })
    .then((val) => {
        results.push(val);
        console.log('response:', results);
        insertData();
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
        prompt.done();
    });


function insertData() {
    var album = { artistId: results[0], releaseYear: results[1], albumName: results[2] };
    var query = `INSERT INTO album (artist_id, release_year, album_name, ) VALUES (${artistId}, ${releaseYear},${albumName})`;
    db.result(query, album)
        .then(function(result) {
            console.log(result);
            var id = result.rows[0].id;
            console.log(`Created album with ID ${id}.`);
            pgp.end();
        });
}