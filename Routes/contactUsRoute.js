const express = require("express")
const router = express.Router()

contactUsController = require("../controller/contactUsController")


router.get("/", contactUsController.getContactInfo);
router.post("/", contactUsController.addContactInfo);

module.exports = router;