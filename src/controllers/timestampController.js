const { parseDate } = require('../services/timestampService');

const getTimestamp = (req, res) => {
  const date = req.params.date;
  const result = parseDate(date);

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  res.json(result);
};

module.exports = { getTimestamp };