import styles from "./HeadingSection.module.scss";
import Search from "../../Search/Search";
import { FC } from "react";
import mapImages from "../../../../../assets/images/map.png";

const HeadingSection: FC = () => {
  return (
    <section className={styles.section} style={{ backgroundImage: `url('${mapImages.src}')` }}>
      <div>
        <h1>
          best places for trip
        </h1>
        <Search />

      </div>
    </section>
  )
}

export default HeadingSection