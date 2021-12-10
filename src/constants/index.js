const d = new Date();

const BASE_URL = "https://ergast.com/api/f1";
const DEFAULT_BEGIN_YEAR = 1950;
const DEFAULT_START_YEAR = 2005;
const DEFAULT_END_YEAR = d.getFullYear();
const ERROR_NODATA_MESSAGE = "Data not available...";
const LIMIT = DEFAULT_END_YEAR - DEFAULT_START_YEAR;
const OFFSET = DEFAULT_START_YEAR - DEFAULT_BEGIN_YEAR;

export {
  BASE_URL,
  DEFAULT_START_YEAR,
  DEFAULT_END_YEAR,
  ERROR_NODATA_MESSAGE,
  LIMIT,
  OFFSET,
};
