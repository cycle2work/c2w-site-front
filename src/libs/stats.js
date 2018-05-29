import moment from "moment";

export const getStats = activities => {
    const month = parseInt(moment.utc().format("MM"), 10);
    const previousMonth = parseInt(
        moment
            .utc()
            .subtract({ months: 1 })
            .format("MM"),
        10
    );

    const totalPrevious = activities
        .filter(x => x.month === previousMonth)
        .reduce((total, activity) => total + activity.distance, 0);

    const total = activities
        .filter(x => x.month === month)
        .reduce((total, activity) => total + activity.distance, 0);

    const more = total >= totalPrevious;

    const delta = total - totalPrevious;

    const stats = {
        km: total / 1000,
        deltaKm: delta / 1000,
        co2: total / 600000,
        deltaCo2: delta / 600000,
        euro: total * 0.2 / 1000,
        deltaEuro: delta * 0.2 / 1000,
        more
    };

    return stats;
};
