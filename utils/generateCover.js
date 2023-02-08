import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export function generateImageCover(sport_type) {
    let src2 = "/images/mtb.jpg"

    if (sport_type === "Run") {
        src2 = '/images/run.jpg'
    } else if (sport_type === "Ride") {
        src2 = '/images/bike.jpg'
    } else if (sport_type === "Swim"){
        src2 = '/images/swim.jpg'
    }

    return (<Image className={utilStyles.image}
                  priority
                  src={src2}
                  height={200}
                  width={200}
                  alt=""
                />)
}