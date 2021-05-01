const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "customermenu";

const client = new Client(
  process.env.DATABASE_URL ||
    `postgressql://postgres:james@localhost:5432/${DB_NAME}`
);

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

async function getClientById(gvrid) {
  try {
    console.log("Firing User by Username");
    const { rows } = await client.query(
      `
      SELECT *
      FROM handling
      WHERE id = $1;
    `,
      [gvrid]
    );
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllClients() {
  const { rows } = await client.query(
    `SELECT *
    FROM handling;
  `
  );

  return rows;
}

module.exports = {
  client,
  getClientById,
  getAllClients,
};
