import React, { useEffect, useState } from "react";
import SeasonsList from "./SeasonsList";
import { getRequest } from "../../../services/api";

const Seasons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function getResults() {
      const url = `/driverStandings/1.json?limit=16&offset=55`;

      try {
        const result = await getRequest(url);

        if (!result.status === 200) {
          const message = `An error has occured: ${result.status} - ${result.statusText}`;
          throw new Error(message);
        }

        setResults(result.data.MRData.StandingsTable.StandingsLists);
      } catch (err) {
        setResults(err.message);
      }
    }

    getResults();
    setIsLoading(false);
  }, []);

  return (
    <>{results && <SeasonsList results={results} isLoading={isLoading} />}</>
  );
};

export default Seasons;
