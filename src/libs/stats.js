import moment from "moment";


export const getMonthlyStats = (activities) => {
    return getStats(activities, "month", "MM");
};

export const getYearlyStats = (activities) => {
    return getStats(activities, "year", "YYYY");
};

const getStats = (activities, activityTimeField, formatTime) => {
    const timeSlot = parseInt(moment.utc().format(formatTime), 10);
    const previousTimeSlot = timeSlot - 1;

    const totalPrevious = activities
        .filter(x => x[activityTimeField] === previousTimeSlot)
        .reduce((total, activity) => total + activity.distance, 0);

    const total = activities
        .filter(x => x[activityTimeField] === timeSlot)
        .reduce((total, activity) => total + activity.distance, 0);

    const more = total >= totalPrevious;

    const delta = total - totalPrevious;

    // https://ecf.com/files/wp-content/uploads/ECF_BROCHURE_EN_planche.pdf?origin_team=T0280AVS0
    const stats = {
        km: total / 1000,
        deltaKm: delta / 1000,
        co2: total / 1000 * 0.229,
        deltaCo2: delta / 1000 * 0.229,
        euro: total * 0.2 / 1000,
        deltaEuro: delta * 0.2 / 1000,
        more
    };

    return stats;
};
