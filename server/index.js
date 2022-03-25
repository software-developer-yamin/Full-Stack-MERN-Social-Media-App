import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// import routers
import PostRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

// use all routers
app.use("/posts", PostRoutes);

const CONNECTION_URL = "mongodb+srv://bdyamin:01880279@cluster0.ecjio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
     .catch(err => console.log(err.message));