const pool = require("../databse");

module.exports = {
  async login(req) {
    const { nick_usuario, contrasena_usuario } = req.body;

    const query = await pool.query(`SELECT * FROM usuario WHERE nick_usuario = '${nick_usuario}';`);

    if (!query.rows[0]) throw "NICK_NAME_NOT_FOUND";

    if (query.rows[0].contrasena_usuario !== contrasena_usuario) throw "NICK_NAME_AND_PASS_NOT_MATCH";
  },

  async signin(req) {
    const { nombre_usuario, nick_usuario, email_usuario, contrasena_usuario } = req.body;

    const userCheck = await pool.query(`SELECT * FROM usuario WHERE nick_usuario = '${nick_usuario}';`);

    if (userCheck.rows[0]) throw "ERR_DUP_ENTRY";

    const query = await pool.query(`INSERT INTO "usuario" VALUES (DEFAULT, '${nombre_usuario}', '${nick_usuario}', '${email_usuario}', '${contrasena_usuario}');`);
  },
};
