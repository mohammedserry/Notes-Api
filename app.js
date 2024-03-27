const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const notesRouter = require("./routes/notes.route.js");
const connectDB = require("./config/db.js");
const usersRouter = require("./routes/users.route.js");

dotenv.config({
  path : "./config/.env",
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/users", usersRouter);


app.listen(3000, () => {
  try {
    connectDB();
    console.log("Server is running on port 3000");
    console.log("Connected to MongoDB!");
   } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
   }
  });