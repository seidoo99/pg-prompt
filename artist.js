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
prompt('id: ')
    .then((val) => {
        results.push(val);
        return prompt.multiline('artist_name: ');
    })
    .then((val) => {
        results.push(val);
        // console.log('response:', results);
    })
    .catch(function rejected(err) {
        console.log('error:', err.stack);
        prompt.finish();
    });
return results;

var querry = `insert into artist(id, artist_name, values (${results[0]}, ${results[1]})`;
db.result(querry, results)
    .then((result) => {
        console.log(result);
    }).catch((e) => {
        console.error(e);
    });
pgp.end();