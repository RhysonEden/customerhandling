const { Client } = require("pg");
const bcrypt = require("bcrypt");
const DB_NAME = "customermenu";

// const client = new Client(
//   process.env.DATABASE_URL ||
//     `postgressql://postgres:james@localhost:5432/${DB_NAME}`
// );

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

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

async function createUser({ username, password, email, admin }) {
  try {
    const result = await client.query(
      `
      INSERT INTO users(username, password, email, admin)
      VALUES ($1, $2, $3, $4);
    `,
      [username, password, email, admin]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function createPart({ number, descr, price }) {
  try {
    const result = await client.query(
      `
      INSERT INTO parts(number, descr, price)
      VALUES ($1, $2, $3);
    `,
      [number, descr, price]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getAdminByUsername(username) {
  try {
    const { rows } = await client.query(
      `
      SELECT admin 
      FROM users 
      WHERE username=$1
    `,
      [username]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM users
      WHERE username = $1;
    `,
      [username]
    );
    ("done");
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function getTicketByNumber(ticket) {
  try {
    const { rows } = await client.query(
      `
      SELECT *
      FROM ticket
      WHERE ticket = $1;
    `,
      [ticket]
    );
    ("done");
    if (!rows || !rows.length) return null;
    const [user] = rows;
    return user;
  } catch (error) {
    throw error;
  }
}

async function createTicket({
  ticket,
  cfm,
  space,
  blower,
  can,
  trailer,
  truck,
  water,
  hand,
  misc,
  p1,
  labor,
  travel,
  part,
  consumables,
  laptop,
  enviroment,
  disposal,
  project,
  stand,
  final,
  nte,
  uplift,
}) {
  try {
    const result = await client.query(
      `
      INSERT INTO ticket(ticket, cfm, space, blower, can, trailer, truck, water, hand, misc, p1, labor, travel, part, consumables, laptop, enviroment, disposal, project, stand, final, nte, uplift)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23);
    `,
      [
        ticket,
        cfm,
        space,
        blower,
        can,
        trailer,
        truck,
        water,
        hand,
        misc,
        p1,
        labor,
        travel,
        part,
        consumables,
        laptop,
        enviroment,
        disposal,
        project,
        stand,
        final,
        nte,
        uplift,
      ]
    );

    return result;
  } catch (error) {
    throw error;
  }
}

async function getUser({ username, password }) {
  if (!username || !password) {
    return;
  }

  try {
    const user = await getUserByUsername(username);
    if (!user) return;
    const matchingPassword = await bcrypt.compareSync(password, user.password);
    if (!matchingPassword) return;
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser({ username, password }) {
  try {
    await client.query(
      `
        UPDATE users
        SET password='${password}'
        WHERE username='${username}';
      `
    );
  } catch (error) {
    error;
    throw error;
  }
}

async function adminUpdate({ username, admin }) {
  try {
    await client.query(
      `
        UPDATE users
        SET admin='${admin}'
        WHERE username='${username}';
      `
    );
  } catch (error) {
    error;
    throw error;
  }
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT *
    FROM users;
  `
  );

  return rows;
}

async function getAllCompanies() {
  const { rows } = await client.query(
    `SELECT *
    FROM parts;
  `
  );

  return rows;
}

async function getCompaniesById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM parts
    WHERE id=$1;
    `,
      [id]
    );
    "user", user;
    return user;
  } catch (error) {
    throw error;
  }
}

async function searchPartsNumber(partNumber) {
  try {
    const { rows } = await client.query(`
    SELECT *
    FROM parts
    WHERE number LIKE '%${partNumber}%'
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUsersByID(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT *
    FROM users
    WHERE id=$1;
    `,
      [id]
    );
    "user", user;
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  createUser,
  getUserByUsername,
  getUser,
  getAllUsers,
  getUsersByID,
  getAllCompanies,
  getCompaniesById,
  updateUser,
  adminUpdate,
  searchPartsNumber,
  getAdminByUsername,
  createPart,
  getTicketByNumber,
  createTicket,
  getClientById,
  getAllClients,
};
