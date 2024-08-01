const { isValidDate, formatToUnixAndUTC } = require('../utils/dateUtils.js');

const parseDate = (date) => {
  if (!date) {
    const now = new Date();
    return formatToUnixAndUTC(now);
  }
  
  const parsedDate = !isNaN(date) ? new Date(parseInt(date)) : new Date(date);
  
  if (!isValidDate(parsedDate)) {
    return { error: 'Invalid Date' };
  }
  
  return formatToUnixAndUTC(parsedDate);
};

module.exports = { parseDate };
