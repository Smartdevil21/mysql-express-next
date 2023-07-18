import { createConnection } from "mysql2";

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "lolm",
    database: "bork"
});

const conn = new Promise((resolve, reject) => {
    db.connect((err) => {
        if (err) reject(new Error(`Connection to DB failed: ${err}`));
        resolve(db);
    })
})

export {conn, db}