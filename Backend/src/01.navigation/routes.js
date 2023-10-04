const express = require('express');
const router = express.Router();


const postersController = require("../02.controllers/posters.controller");
const eventsController = require("../02.controllers/events.controllers")



/* ------------------------------------------------------------------------
Routes Posters
------------------------------------------------------------------------- */

router.get("/posters", postersController.getAllPosters)
router.post("/posters", postersController.createOnePoster)
router.put("/posters/:postersId", postersController.updateOnePoster)
router.delete("/posters/:postersId", postersController.deleteOnePoster)




/* ------------------------------------------------------------------------
Routes events
--------------------------------------  ----------------------------------- */

router.post("/events", eventsController.createOneEvent)


module.exports = router;