const logger = (req, res, next) => {
  console.log("Przychodzący request");
  next();
};

module.exports = { logger };
