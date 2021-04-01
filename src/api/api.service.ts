import { FRANCHISE_URL, FRANCHISES_URL } from "./endpoints";
import { TeamModel } from '../models/Team';
import * as config from "../config.json";

const axios = require("axios");

const headers = {};

export const getTeams = () => {
  axios.get(`${config.api}${FRANCHISES_URL}`, { headers })
    .then((res: TeamModel) => res)
    .catch((err: any) => {
      console.log('@Error: ', err);
    })
};
