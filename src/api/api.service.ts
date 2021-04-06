import { FRANCHISE_URL, FRANCHISES_URL, DIVISIONS_URL } from "./endpoints";
import * as config from "../config.json";

const axios = require("axios");

const headers = {};

export const fetchTeams = () => {
  return axios.get(`${config.api}${FRANCHISES_URL}`, { headers })
    .then((res: any) => res.data.teams)
    .catch((err: any) => {
      console.log('@Error: ', err);
    })
};

export const fetchDivisions = () => {
  return axios.get(`${config.api}${DIVISIONS_URL}`, { headers })
    .then((res: any) => res.data.divisions)
    .catch((err: any) => {
      console.log('@Error: ', err);
    })
}


