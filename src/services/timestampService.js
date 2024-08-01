import { isValidDate, formatToUnixAndUTC } from '../utils/dateUtils';

const parseDate = (date) => {
    if (!date) {
        const now = new Date();
        return formatToUnixAndUTC(now);
    }

    const parsedDate = isNaN(date) ? new Date(date) : new Date(parseInt(date));

    if (!isValidDate(parseDate)) return { error: 'Invalid Date' };

    return formatToUnixAndUTC(parseDate);
};

export { parseDate };