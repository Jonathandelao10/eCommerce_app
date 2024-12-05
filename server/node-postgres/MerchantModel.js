const Pool = require("pg").Pool;
const pool = new Pool({
    user: "14806",
    host: 'localhost',
    database: "project_proposal",
    password: "",
    port: 5432,
});
//get all users and products our database
const getData = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM product WHERE p_category = 'electronics';", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

module.exports = {
  getData
};
