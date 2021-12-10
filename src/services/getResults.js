import { getRequest } from "./api";

const getResults = async (season) => {
  const url = `/${season}/results/1.json`;

  try {
    const result = await getRequest(url);

    if (!result.status === 200) {
      const message = `An error has occured: ${result.status} - ${result.statusText}`;
      throw new Error(message);
    }

    return result.data.MRData.RaceTable.Races;
  } catch (err) {
    return err.message;
  }
};

export { getResults };
