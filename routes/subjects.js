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
    getVideoGames
} = require("../controllers/subjects");

router.route("/").get(getAllCareers);
router.route("/multimedia").get(getMultimedia);
router.route("/sonido").get(getSound);
router.route("/software").get(getSoftwareDevelopment);
router.route("/mecatronica").get(getMechatronic);
router.route("/ciencia_de_datos").get(getDataScience);
router.route("/seguridad_informatica").get(getComputerSecurity);
router.route("/disennio_industrial").get(getIndustrialDesign);
router.route("/manufactura_de_dispositivos_medicos").get(getMedicalDevices);
router.route("/manufactura_automatizada").get(getAutomatedManufacturing);
router.route("/redes").get(getInformationNetworks);
router.route("/energias_renovables").get(getRenewableEnergy);
router.route("/informatica_forense").get(getComputerForensics);
router.route("/inteligencia_artificial").get(getAI);
router.route("/telecomunicaciones").get(getTelecommunications);
router.route("/simulaciones_interactivas_y_videojuegos").get(getVideoGames);

module.exports = router;