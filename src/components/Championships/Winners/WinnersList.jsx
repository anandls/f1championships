import React from "react";
import { Link } from "react-router-dom";
import WinnersListRows from "./WinnersListRows";
import styles from "./Winners.module.scss";

const WinnersList = ({ results, season, driver, isLoading }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid}>
        <section className={styles.section}>
          <header>
            <section className={styles.info}>
              <div>
                <Link to="/">&lt;&lt; Back</Link>
              </div>
              <h1>Results for Season {season}</h1>
            </section>
          </header>
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th>Driver</th>
                <th>Race</th>
                <th>Constructor</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <WinnersListRows
                results={results}
                driver={driver}
                isLoading={isLoading}
              />
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default WinnersList;
