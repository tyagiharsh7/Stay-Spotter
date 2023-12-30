const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate).setHours(0, 0, 0, 0);
    const end = new Date(endDate).setHours(0, 0, 0, 0);

    const date = new Date(start);

    const dates = [];

    while (date <= end) {
        dates.push(new Date(date).setHours(0, 0, 0, 0));
        date.setDate(date.getDate() + 1);
    }

    return dates;
};

export default getDatesInRange;