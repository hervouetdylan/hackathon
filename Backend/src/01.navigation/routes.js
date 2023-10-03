const express = require("express");
const router = express.Router();


const userController = require("../02.controllers/user.controller");
const placeController = require("../02.controllers/place.controller")


/* ------------------------------------------------------------------------
Routes User
------------------------------------------------------------------------- */

router.get("/user", userController.getAllUser)
router.post("/user", userController.createOneUser)
router.put("/user/:userId", userController.updateOneUser)
router.delete("/posters/:userId", userController.deleteOneUser)




/* ------------------------------------------------------------------------
Routes place
------------------------------------------------------------------------- */

router.get("/place", placeController.getAllPLace)


module.exports = router