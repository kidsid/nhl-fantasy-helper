import { FRANCHISE_URL, FRANCHISES_URL } from "./endpoints";
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