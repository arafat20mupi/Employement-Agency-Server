// UserRoutes.js
const express = require("express");
const { register, login, getAllUsers, deleteUser, changeUserRole, checkAdmin, updateUser } = require("./UsersController");

const route = express.Router();

// Register Route
route.post("/register", register);
 
//  login Route
route.post('/login', login)

// Get All Users Route
route.get("/users",  getAllUsers);

// Delete User Route
route.delete("/:uid",  deleteUser);

// Change User Role Route
route.put("/role",  changeUserRole);

// Check Admin Status Route
route.get("/check-admin/:uid",  checkAdmin);

// Update User 
route.put('/register',  updateUser)

module.exports = route;