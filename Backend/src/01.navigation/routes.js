const express = require('express');
const router = express.Router();

const posterController = require("../02.controllers/posters.controller")
const userController = require("../02.controllers/user.controller");
const placeController = require("../02.controllers/place.controller")
const categoryController = require("../02.controllers/category.controller")

const postersController = require("../02.controllers/posters.controller");
const eventsController = require("../02.controllers/events.controllers")



/* ------------------------------------------------------------------------
Routes place
------------------------------------------------------------------------- */

router.get("/place", placeController.getAllPLace)

/* ------------------------------------------------------------------------
Routes events
--------------------------------------  ----------------------------------- */

router.post("/events", eventsController.createOneEvent)


module.exports = router;