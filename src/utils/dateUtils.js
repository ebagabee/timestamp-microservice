const isValidDate = (date) => !isNaN(date.getTime());

const formatToUnixAndUTC = (date) => ({
    unix: date.getTime(),
    utc: date.toUTCString()
});

export { isValidDate, formatToUnixAndUTC };