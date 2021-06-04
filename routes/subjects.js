const express = require("express");
const router = express.Router();

const {
  getAllCareers,
  getMultimedia,
  getSound,
  getSoftwareDevelopment,
  getMechatronic,
  getDataScience,
  getComputerSecurity,
  getIndustrialDesign,
  getMedicalDevices,
  getAutomatedManufacturing,
  getInformationNetworks,
  getRenewableEnergy,
  getComputerForensics,
  getAI,
  getTelecommunications,
  getVideoGames,
} = require("../controllers/subjects");

router.route("/").get(getAllCareers);
router.route("/multimedia").get(getMultimedia);
router.route("/sonido").get(getSound);
router.route("/software").get(getSoftwareDevelopment);
router.route("/mecatronica").get(getMechatronic);
router.route("/ciencia-de-datos").get(getDataScience);
router.route("/seguridad-informatica").get(getComputerSecurity);
router.route("/disennio-industrial").get(getIndustrialDesign);
router.route("/manufactura-de-dispositivos-medicos").get(getMedicalDevices);
router.route("/manufactura-automatizada").get(getAutomatedManufacturing);
router.route("/redes").get(getInformationNetworks);
router.route("/energias-renovables").get(getRenewableEnergy);
router.route("/informatica-forense").get(getComputerForensics);
router.route("/inteligencia-artificial").get(getAI);
router.route("/telecomunicaciones").get(getTelecommunications);
router.route("/simulaciones-interactivas-y-videojuegos").get(getVideoGames);

module.exports = router;
