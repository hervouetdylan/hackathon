const express = require('express');
const router = express.Router();

const userController = require("../02.controllers/user.controller");
const placeController = require("../02.controllers/place.controller")
const categoryController = require("../02.controllers/category.controller")
const eventsController = require("../02.controllers/events.controllers")

/* ------------------------------------------------------------------------
Routes user
------------------------------------------------------------------------- */
router.get("/user", userController.getAllUser)
router.post("/login", userController.getLogin)
router.post("/user", userController.createOneUser)
router.put("/user", userController.updateOneUser)
router.delete("/user", userController.deleteOneUser)
/* ------------------------------------------------------------------------
Routes category
------------------------------------------------------------------------- */
router.get("/category",categoryController.getAllCategory)
/* ------------------------------------------------------------------------
Routes place
------------------------------------------------------------------------- */

router.get("/place", placeController.getAllPLace)

/* ------------------------------------------------------------------------
Routes events
--------------------------------------  ----------------------------------- */

router.post("/event", eventsController.createOneEvent)
router.put("/events/:eventId", eventsController.updateOneEvent)
router.delete("/events/:eventId", eventsController.deleteOneEvent)
router.get("/event", eventsController.getAllEvents)

module.exports = router;
    