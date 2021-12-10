import React from "react";
import { ERROR_NODATA_MESSAGE } from "../../../constants";
import styles from "./Winners.module.scss";

const WinnersListRows = ({ results, driver, isLoading }) => {
  return (
    <>
      {!isLoading && !results ? (
        <tr>
          <td colSpan="5">{ERROR_NODATA_MESSAGE}</td>
        </tr>
      ) : null}

      {!isLoading ? (
        results &&
        results?.map(({ round, raceName, Results, Circuit }) => {
          const { givenName, familyName } = Results?.[0]?.Driver;
          const { name } = Results?.[0]?.Constructor;
          const { country } = Circuit?.Location;
          const isHighlight = driver === Results?.[0]?.Driver?.driverId;

          return (
            <tr key={round} className={isHighlight ? styles.highlight : ""}>
              <td>{round}</td>
              <td>
                {givenName} {familyName} <br />
                {isHighlight ? (
                  <span className={styles.highlightText}>World Champion</span>
                ) : null}
              </td>
              <td>{raceName}</td>
              <td>{name}</td>
              <td>{country}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      )}
    </>
  );
};

export default WinnersListRows;
