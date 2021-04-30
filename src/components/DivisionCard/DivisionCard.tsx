import React from 'react';
import { DivisionModel } from '../../models';
import TeamCard from '../TeamCard/TeamCard';
import { TeamModel } from '../../models/index';

function DivisionCard(props: any) {
  
  return (
    <div className="flex-row">
      <div className="text-xl font-semibold">{props.division.name}</div>
      {
        props.division.teams.map((team: TeamModel, index: number) => {
          return <TeamCard  teamName={team.name} abbr={team.abbreviation} key={index}/>
        })
      }
    </div>
  );
}

export default DivisionCard;