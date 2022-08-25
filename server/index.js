const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const connectToDatabase = require("../config/connectToDatabase");

dotenv.config();

connectToDatabase();
const app = express();

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api", require("./routes/Auth_router"));
app.use("/api", require("./routes/User_router"));
app.use("/api", require("./routes/Film_router"));

// Serve frontend

// const MODE = config.get("NODE_ENV");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "client", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

let PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
