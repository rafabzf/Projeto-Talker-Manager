const validationDate = (date) => /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date);

module.exports = validationDate;