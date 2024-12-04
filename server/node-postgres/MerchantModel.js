const Pool = require("pg").Pool;
const pool = new Pool({
    user: "14806",
    host: 'localhost',
    database: "project_proposal",
    password: "!Goliath225775",
    port: 5432,
});
//get all product our database
const getProducts = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM product", (error, results) => {
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
// get all users
const getUsers = async () => {
    try {
      return await new Promise(function (resolve, reject) {
        pool.query("SELECT * FROM users", (error, results) => {
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
  getProducts,
  getUsers,
};