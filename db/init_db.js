const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const { client, getClientById, getAllClients } = require("./index");

async function createTables() {
  try {
    console.log("Starting to Create Tables");
    await client.query(`
        CREATE TABLE handling (
          id SERIAL PRIMARY KEY,
          gvr varchar UNIQUE NOT NULL,
          comp varchar NOT NULL,
          name varchar NOT NULL,
          street varchar NOT NULL,
          city varchar NOT NULL,
          state varchar NOT NULL,
          zip varchar NOT NULL,
          number varchar NOT NULL,
          warranty varchar,
          email1 varchar NOT NULL,
          email2 varchar NOT NULL,
          noticewar varchar NOT NULL,
          remodiagwar varchar NOT NULL,
          remrepwar varchar NOT NULL,
          dispwar varchar NOT NULL,
          noticeout varchar NOT NULL,
          remdiagout varchar NOT NULL,
          remrepout varchar NOT NULL,
          dispout varchar NOT NULL
      )`);
    console.log("Finished Creating Table");
  } catch (error) {
    throw error;
  }
}

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS handling;
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    console.log;
  } catch (error) {
    throw error;
  }
}

async function testDB() {
  try {
    await dropTables();
    await createTables();
    // const id = await getClientById(830515);
    // const all = await getAllClients();

    // console.log(id);
    // console.log(all);
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
