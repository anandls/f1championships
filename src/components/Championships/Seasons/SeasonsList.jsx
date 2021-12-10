import React from "react";
import { DEFAULT_START_YEAR, DEFAULT_END_YEAR } from "../../../constants";
import SeasonsListRows from "./SeasonsListRows";
import styles from "./Seasons.module.scss";
import "../../../styles/Button.module.scss";

const SeasonsList = (props) => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid}>
        <section className={styles.section}>
          <header>
            <section className={styles.info}>
              <h1>
                Champions for seasons between {DEFAULT_START_YEAR} -{" "}
                {DEFAULT_END_YEAR}
              </h1>
            </section>
          </header>
          <table>
            <thead>
              <tr>
                <th>Race</th>
                <th>Driver</th>
                <th></th>
                <th>Season</th>
                <th>View Races</th>
              </tr>
            </thead>
            <tbody>
              <SeasonsListRows results={props} />
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default SeasonsList;
