const database = require("../dbPool");
const careers = require("../careers");

const querySubjects = (subject, res) => {
  const sql = `select * from ${subject};`;

  const result = database.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0)
      res.status(200).json({ response: true, data: result });
    else res.status(404).json({ response: false, data: [] });
  });

  return result;
};

const getAllCareers = (req, res) => {
  if (careers.length > 0)
    res.status(200).json({ response: true, data: careers });
  else res.status(404).json({ response: false, data: [] });
};

const getMultimedia = (req, res) => {
  return querySubjects("multimedia", res);
};

const getSound = (req, res) => {
  return querySubjects("sonido", res);
};

const getSoftwareDevelopment = (req, res) => {
  return querySubjects("desarrollo_de_software", res);
};

const getMechatronic = (req, res) => {
  return querySubjects("mecatronica", res);
};

const getDataScience = (req, res) => {
  return querySubjects("ciencia_de_datos", res);
};

const getComputerSecurity = (req, res) => {
  return querySubjects("seguridad_informatica", res);
};

const getIndustrialDesign = (req, res) => {
  return querySubjects("disennio_industrial", res);
};

const getMedicalDevices = (req, res) => {
  return querySubjects("manufactura_de_dispositivos_medicos", res);
};

const getAutomatedManufacturing = (req, res) => {
  return querySubjects("manufactura_automatizada", res);
};

const getInformationNetworks = (req, res) => {
  return querySubjects("redes_de_informacion", res);
};

const getRenewableEnergy = (req, res) => {
  return querySubjects("energias_renovables", res);
};

const getComputerForensics = (req, res) => {
  return querySubjects("informatica_forense", res);
};

const getAI = (req, res) => {
  return querySubjects("inteligencia_artificial", res);
};

const getTelecommunications = (req, res) => {
  return querySubjects("telecomunicaciones", res);
};

const getVideoGames = (req, res) => {
  return querySubjects("simulaciones_interactivas_y_videojuegos", res);
};

module.exports = {
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
};
