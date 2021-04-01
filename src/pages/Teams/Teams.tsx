import React, { useEffect, useState } from "react";
import { fetchTeams } from "../../api/api.service";
import { TeamModel } from '../../models/Team';

function Teams() {
  const [teams, setTeams] = useState(new Array<TeamModel>())

  useEffect(() => {
    fetchTeams().then((res: Array<TeamModel>) => {
      setTeams(res);
    })
  }, [])

  return (
    <div>
      {
        teams.map((team: TeamModel, index: number) => {
          return <div key={index}>{team.name}</div>
        })
      }
    </div>
  );
}

export default Teams;
