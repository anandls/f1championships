import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WinnersList from "./WinnersList";
import { getRequest } from "../../../services/api";

const Winners = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(null);
  const { season, worldchampion } = useParams();

  useEffect(() => {
    async function getResults() {
      const url = `/${season}/results/1.json`;

      try {
        const result = await getRequest(url);

        if (!result.status === 200) {
          const message = `An error has occured: ${result.status} - ${result.statusText}`;
          throw new Error(message);
        }
        setResults(result.data.MRData.RaceTable.Races);
      } catch (err) {
        setResults(err.message);
      }
    }

    getResults();
    setIsLoading(false);
  }, [season]);

  return (
    <>
      <WinnersList
        results={results}
        season={season}
        driver={worldchampion}
        isLoading={isLoading}
      />
    </>
  );
};

export default Winners;
