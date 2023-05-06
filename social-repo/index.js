const app = require("./src/app");
const pool = require("./src/pool");

pool
  .connect({
    host: "localhost",
    port: 5432,
    database: "socialnetwork",
    user: "postgres",
    password: "password",
  })
  .then(() => {
    app().listen(5000, () => console.log("App is listening on port 5000"));
  })
  .catch((err) => console.error(err));
