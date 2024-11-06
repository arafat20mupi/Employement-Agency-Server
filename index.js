const express = require("express");
const app = express();
require("dotenv").config(); 
const connectDB = require("./Config/dbConfig")
const cors = require('cors');
const JobRoute = require('./Jobs/JobsRoute')
const UserRoute = require('./Users/UsersRoute')
// Middleware
app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify the HTTP methods allowed
  credentials: true,  // Enable this if you're using cookies or authentication tokens
}));



// Connect to MongoDB
connectDB();
//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});

app.use('/api' , JobRoute)

app.use('/api' , UserRoute)
// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});