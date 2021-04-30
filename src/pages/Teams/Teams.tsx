import React, { useEffect, useState } from "react";
import { ApiService, FantasyService } from "../../api/index";
import { takeUntil, mergeMap } from 'rxjs/operators';
import { Subject, forkJoin } from 'rxjs';
import { DivisionModel, TeamModel } from '../../models/index';
import DivisionCard from '../../components/DivisionCard/DivisionCard';

function Teams() {
  const [divisions, setDivisions] = useState(new Array<DivisionModel>())

  useEffect(() => {
    const fantasyService = new FantasyService(new ApiService());
    const unsubscribe$: Subject<null> = new Subject();

    const getDivisions = fantasyService.getDivisions();
    const getFranchises = fantasyService.getFranchises();

    forkJoin([getDivisions, getFranchises])
      .pipe(
        takeUntil(unsubscribe$)
      )
      .subscribe((data: [Array<DivisionModel>, Array<TeamModel>]) => {
        const divisions = data[0];
        const teams = data[1];
        console.log('@teams', teams);
        

        divisions.forEach((division: DivisionModel) => {
          division.teams = new Array<TeamModel>();
        })
        
        teams.forEach((team: TeamModel) => {
          divisions.forEach((division: DivisionModel) => {
            if(team.division.id === division.id) {
              
              division.teams?.push(team);
            }
          })
        })
        setDivisions(divisions);
      })

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    }

  }, [])

  return (
    <div className="flex justify-evenly">
      {
        divisions.map((division: DivisionModel, index: number) => {
          return <DivisionCard division={division} key={index}></DivisionCard>
        })
      }
    </div>
  );
}

export default Teams;
