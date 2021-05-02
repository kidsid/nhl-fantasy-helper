import { ApiService } from './api.service';
import { FRANCHISE_URL, FRANCHISES_URL, DIVISIONS_URL, STANDINGS_URL, FRANCHISE_ROSTER_URL } from "./endpoints";
import { map } from 'rxjs/operators';

export class FantasyService {
  constructor(private apiService: ApiService){}

  getFranchises() {
    return this.apiService.apiCall(FRANCHISES_URL).pipe(
      map((res: any) => res.teams)
    )
  }

  getFranchiseById(id: number) {
    const url = FRANCHISE_URL.replace('{id}', id.toString());
    return this.apiService.apiCall(url).pipe(
      map((res: any) => res.teams[0])
    )
  }

  getRosterById(id: number) {
    const url = FRANCHISE_ROSTER_URL.replace('{id}', id.toString());
    return this.apiService.apiCall(url).pipe(
      map((res: any) => res.roster)
    )
  }

  getDivisions() {
    return this.apiService.apiCall(DIVISIONS_URL).pipe(
      map((res: any) => res.divisions)
    )
  }

  getStandings() {
    return this.apiService.apiCall(STANDINGS_URL).pipe(
      map((res: any) => res)
    )
  }
}