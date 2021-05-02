import React from "react";
import { useHistory } from 'react-router-dom';

function TeamCard(props: any) {
  const history = useHistory();

  const onTeamClick = () => {
    return history.push(`/team/${props.id}`)
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white border-2 m-2 cursor-pointer shadow-md flex items-center space-x-4" onClick={onTeamClick}>
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src={`/team-icons/${props.abbr}.png`} alt=""/>
      </div>
      <div>{props.teamName}</div>
    </div>
  );
}

export default TeamCard;
