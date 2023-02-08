export function secondsToHourString(time) {
    const hours = Math.floor(time / 24 / 60);
    let minutes = Math.floor(time / 60 % 24);
    let seconds = Math.floor(time % 60);

    minutes = (minutes < 10) ? ("0" + minutes) : minutes;
    seconds = (seconds < 10) ? ("0" + seconds) : seconds;

    let text = minutes + ':' + seconds

    if (hours > 0) {
        text = hours + ":" + text;
    }
    return text;
}

export function metersSecondToKmH(speed) {
    return (speed) * (60 * 60) / 1000
}