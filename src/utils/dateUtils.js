const isValidDate = (date) => date instanceof Date && !isNaN(date.getTime());

const formatToUnixAndUTC = (date) => ({
  unix: date.getTime(),
  utc: date.toUTCString()
});

module.exports = { isValidDate, formatToUnixAndUTC };