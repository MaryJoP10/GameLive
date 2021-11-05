const { Pool } = require("pg");
const connectionString = "postgresql://postgres:Majitochan10@localhost:5432/gamelive";
const pool = new Pool({
  connectionString,
});
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Conectado a la base de datos");
  });
});

module.exports = pool;
