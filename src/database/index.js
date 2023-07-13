const res = require('express/lib/response');
const {Client} = require('pg');

const client = new Client( {
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontact',
});


client.connect();

exports.query = async (query,values) => {
  const result = await client.query(query,values);
  return result.rows;
}


