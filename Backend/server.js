const express = require("express");
const path = require("path");
const cors = require("cors");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(cors());
const dbPath = path.join(__dirname, "Products.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3001, () => {
      console.log("Server Running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get("/items", async (request, response) => {
  const {
    sort_by = "id",
    search_q = "",
    order = "ASC",
    category_id = "",
  } = request.query;
  let dbQuery = `SELECT * FROM Items WHERE name LIKE '%${search_q}%' ORDER BY ${sort_by} ${order}`;
  if (category_id !== "") {
    dbQuery = `SELECT * FROM Items WHERE category_id=${category_id} AND name LIKE '%${search_q}%' ORDER BY ${sort_by} ${order}`;
  }
  const data = await db.all(dbQuery);
  console.log(dbQuery);
  response.json(data);
});

app.get("/categories", async (request, response) => {
  const dbQuery = `SELECT * FROM categories;`;
  const data = await db.all(dbQuery);
  response.json(data);
});
