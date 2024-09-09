
import { IPlace } from "@/app/types/place";
import { FC } from "react";
import styles from './PopularPlaces.module.scss';
import Link from "next/link";

interface IPopularPlaces {
  places: IPlace[]
}

const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
  console.log(places)
  return (
    <div className={styles.wrapper}>
      <h2>Popular places</h2>
      {places.map(place => (
        <Link href={`place/${place.slug}`} key={place.slug}>
          <div
            className={styles.item}
            style={{ backgroundImage: `url(${place.imagePath})` }}
          >
            <span className={styles.heading}>
              <h2>
                {place.location.city + ', ' + place.location.country}
              </h2>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )

}

export default PopularPlaces