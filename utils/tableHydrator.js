import utilStyles from '../styles/utils.module.css';

import {secondsToHourString, metersSecondToKmH} from './converter'

export function tableCreator(activity) {
    return (
        <table className={utilStyles.width100}>
            <tr>
                <th>{(activity.distance / 1000).toFixed(2)}</th>
                <th>{secondsToHourString(activity.moving_time)}</th>
            </tr>
            <tr>
                <th>{metersSecondToKmH(activity.average_speed).toFixed(2)}</th>
                <th>{activity.total_elevation_gain}</th>
            </tr>
        </table>
    )
}