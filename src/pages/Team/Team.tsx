import React, {useEffect, useState} from 'react';
import { ApiService, FantasyService } from '../../api/index';
import { takeUntil, map } from 'rxjs/operators';
import { Subject, forkJoin } from 'rxjs';
import { useLocation } from 'react-router-dom';
import { PlayerModel, TeamModel } from 'models';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

function Team() {
  const [roster, setRoster] = useState(new Array<PlayerModel>());
  const initialValue: TeamModel = {} as TeamModel;
  const [teamInfo, setTeamInfo] = useState(initialValue);
  const location = useLocation();

  useEffect(() => {
    const teamId = location.pathname.split('team/')[1];
    
    const fantasyService = new FantasyService(new ApiService());
    const getTeamRoster = fantasyService.getRosterById(Number(teamId));
    const getTeamInfo = fantasyService.getFranchiseById(Number(teamId));
    const unsubscribe$: Subject<null> = new Subject();

    forkJoin([getTeamInfo, getTeamRoster])
      .pipe(
        takeUntil(unsubscribe$)
      )
      .subscribe((data: [TeamModel, Array<PlayerModel>]) => {
        const teamInfo = data[0];
        const roster = data[1];
        console.log('@roster', roster);
        
        setRoster(roster);
        setTeamInfo(teamInfo);
      })

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    }
  }, [])

  return (
    <div className="">
      <div className="p-8 text-lg font-black">{teamInfo.name}</div>
        <div className="flex flex-wrap justify-center">
          {
            roster.map((player: any, index: number) => {
              if(index % 3 === 0) {
                return [<br/>, <PlayerCard key={index} playerName={player.person.fullName} position={player.position.code} number={player.jerseyNumber}></PlayerCard>];
              } else {
                return <PlayerCard key={index} playerName={player.person.fullName} position={player.position.code} number={player.jerseyNumber}></PlayerCard>
              }
              
            }) 
          }
        </div>
    </div>
    
  );
}

export default Team;