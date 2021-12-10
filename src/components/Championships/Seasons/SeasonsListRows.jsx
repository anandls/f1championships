import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ERROR_NODATA_MESSAGE } from "../../../constants";

const SeasonsListRows = ({ results }) => {
  const history = useHistory();
  const propertyNames = Object.values(results);
  const seasonResults = propertyNames?.[0] || [];
  const { isLoading } = results;

  const handleClick = (e, seasonYear, driverId) => {
    history.push(`/winners/${seasonYear}/${driverId}`);
  };

  return (
    <>
      {!seasonResults?.length && (
        <tr>
          <td colSpan="5">{ERROR_NODATA_MESSAGE}</td>
        </tr>
      )}

      {!isLoading ? (
        seasonResults &&
        seasonResults.map(({ season, round, DriverStandings }) => {
          const { driverId } = DriverStandings?.[0]?.Driver;
          const { givenName, familyName } = DriverStandings?.[0]?.Driver;
          const { name } = DriverStandings?.[0]?.Constructors?.[0];

          return (
            <tr key={season}>
              <td>
                <Link to={`/winners/${season}/${driverId}`}>{round}</Link>
              </td>
              <td>
                <Link to={`/winners/${season}/${driverId}`}>{givenName}</Link>
              </td>
              <td>
                <Link to={`/winners/${season}/${driverId}`}>{familyName}</Link>
              </td>
              <td>
                <Link to={`/winners/${season}/${driverId}`}>{name}</Link>
              </td>
              <td>
                <Link to={`/winners/${season}/${driverId}`}>{season}</Link>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={(e) => handleClick(e, season, driverId)}
                  >
                    See Winners for {season}
                  </button>
                </div>
              </td>
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

export default SeasonsListRows;
