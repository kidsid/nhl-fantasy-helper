import { ApiService } from './api.service';
import { FRANCHISE_URL, FRANCHISES_URL, DIVISIONS_URL } from "./endpoints";
import { map } from 'rxjs/operators';

export class FantasyService {
  constructor(private apiService: ApiService){}

  getFranchises() {
    return this.apiService.apiCall(FRANCHISES_URL).pipe(
      map((res: any) => res.teams)
    )
  }

  getDivisions() {
    return this.apiService.apiCall(DIVISIONS_URL).pipe(
      map((res: any) => res.divisions)
    )
  }
}