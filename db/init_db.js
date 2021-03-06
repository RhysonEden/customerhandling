const bcrypt = require("bcrypt");
const SALT_COUNT = 10;
const { client, getClientById, getAllClients, createUser } = require("./index");

async function createTables() {
  try {
    console.log("Starting to Create Tables");
    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username varchar UNIQUE NOT NULL,
      password varchar NOT NULL,
      email varchar NOT NULL,
      admin varchar NOT NULL,
      change varchar
      );


 `);
    console.log("Finished Creating Table");
  } catch (error) {
    throw error;
  }
}

//Notes for test

//       CREATE TABLE handling (
//   id SERIAL PRIMARY KEY,
//   gvr varchar UNIQUE ,
//   gpcus varchar ,
//   comp varchar ,
//   name varchar ,
//   street varchar ,
//   gctype varchar ,
//   warranty varchar,
//   email1 varchar ,
//   email2 varchar ,
//   noticewar varchar ,
//   remodiagwar varchar ,
//   remrepwar varchar ,
//   dispwar varchar ,
//   noticeout varchar ,
//   remdiagout varchar ,
//   remrepout varchar ,
//   dispout varchar ,
//   actdate varchar
// );

async function createInitialUsers() {
  try {
    console.log("Starting to create users...");
    let jamesPassword = "K@elyn819";
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const david = await createUser({
          username: "scott",
          password: hashedPassword,
          email: "GuardianConnect@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });

    // await new Promise((resolve, reject) => {
    //   bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
    //     const david = await createUser({
    //       username: "forrest",
    //       password: hashedPassword,
    //       email: "GuardianConnect@guardianfueltech.com",
    //       admin: false,
    //     });
    //     resolve();
    //   });
    // });

    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const admin = await createUser({
          username: "nels",
          password: hashedPassword,
          email: "GuardianConnect@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const admin = await createUser({
          username: "josh",
          password: hashedPassword,
          email: "GuardianConnect@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const admin = await createUser({
          username: "amber",
          password: hashedPassword,
          email: "GuardianConnect@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash(
        jamesPassword,
        SALT_COUNT,
        async function (err, hashedPassword) {
          const james = await createUser({
            username: "james",
            password: hashedPassword,
            email: "jgale@guardianfueltech.com",
            admin: true,
            change: 1,
          });
          console.log(hashedPassword, "hashed");
          console.log(jamesPassword, "non");
          resolve();
        }
      );
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const chris = await createUser({
          username: "sydney",
          password: hashedPassword,
          email: "GuardianConnect@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    await new Promise((resolve, reject) => {
      bcrypt.hash("gft2020", SALT_COUNT, async function (err, hashedPassword) {
        const callcenter = await createUser({
          username: "gftcenter",
          password: hashedPassword,
          email: "GuardianConnect@guardianfueltech.com",
          admin: false,
        });
        resolve();
      });
    });
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}

async function dropTables() {
  try {
    console.log("Starting to drop tables...");
    await client.query(`
      DROP TABLE IF EXISTS users;
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
    await createInitialUsers();
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
