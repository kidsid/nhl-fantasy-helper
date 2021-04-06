import * as config from "../config.json";
import { ApiHeaders } from './apiKey';
import { Observable } from 'rxjs';
const axios = require("axios");

export class ApiService {
  private httpOptions = {};

  constructor() {
    this.httpOptions = {
      headers: ApiHeaders
    }
  }


  public apiCall(endPoint: string) {
    return new Observable(observer => {
      axios.get(`${config.api}${endPoint}`, this.httpOptions)
        .then((response: any) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: any) => observer.error(error));
    })
  }
}