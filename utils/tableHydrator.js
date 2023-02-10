import utilStyles from '../styles/utils.module.css';

import { secondsToHourString, metersSecondToKmH } from './converter'



function rideTable(activity) {
    return (
        <table className={utilStyles.width100}>
            <tr>
                <th>{(activity.distance / 1000).toFixed(2)} km</th>
                <th>{secondsToHourString(activity.moving_time)}</th>
            </tr>
            <tr>
                <th>{metersSecondToKmH(activity.average_speed).toFixed(2)} km/h</th>
                <th>{activity.total_elevation_gain} m</th>
            </tr>
        </table>
    )
}

function runTable(activity) {
    return (
        <table className={utilStyles.width100}>
            <tr>
                <th>{(activity.distance / 1000).toFixed(2)} km</th>
                <th>{secondsToHourString(activity.moving_time)}</th>
            </tr>
            <tr>
                <th>{metersSecondToKmH(activity.average_speed).toFixed(2)}  km/h</th>
                <th>{activity.total_elevation_gain} m</th>
            </tr>
        </table>
    )
}

function swimTable(activity) {
    return (
        <table className={utilStyles.width100}>
            <tr>
                <th>{(activity.distance / 100).toFixed(2)} m</th>
                <th>{secondsToHourString(activity.moving_time)}</th>
            </tr>
        </table>
    )
}

export function tableCreator(activity) {
    if (activity.sport_type === "Run") {
        return runTable(activity)
    } else if (activity.sport_type === "Ride") {
        return rideTable(activity)
    } else if (activity.sport_type === "Swim") {
        return swimTable(activity)
    }
}