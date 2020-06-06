const pool = require("../../config/db");

async function findScore(sid) {
  const data = await pool.pquery(
    `SELECT g.cid, g.grade, c.Callgrade as total, c.Cname as cname FROM grade g,course c WHERE  g.Cid=c.Cid and g.Sid=?`,
    [sid]
  );
  return {
    code: 1,
    data,
  };
}

module.exports = {
  findScore,
};
