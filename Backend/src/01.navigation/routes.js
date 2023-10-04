const express = require("express");
const router = express.Router();

const userController = require("../02.controllers/user.controller");
const placeController = require("../02.controllers/place.controller")
const categoryController = require("../02.controllers/category.controller")

/* ------------------------------------------------------------------------
Routes User
------------------------------------------------------------------------- */

router.get("/user", userController.getAllUser)
router.post("/user", userController.createOneUser)
router.put("/user/:userId", userController.updateOneUser)
router.delete("/posters/:userId", userController.deleteOneUser)

router.post("/login", userController.getLogin)

/* ------------------------------------------------------------------------
Routes place
------------------------------------------------------------------------- */

router.get("/place", placeController.getAllPLace)

/* ------------------------------------------------------------------------
Routes category
------------------------------------------------------------------------- */

router.get("/category", categoryController.getAllCategory)

module.exports = router