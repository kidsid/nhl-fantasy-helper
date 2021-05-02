import React from 'react';

function PlayerCard(props: any) {
  return (
    <div className="w-1/4 m-8 cursor-pointer">
      <div className="flex justify-center space-x-1">
        <div>{props.number}</div>
        <div>( {props.position} ) </div>
      </div>
      <div>
        <img className="fill-current text-green-600" src="/jersey.svg" alt=""/>
      </div>
      <div className="font-bold">{props.playerName} </div>
    </div>
  );
}

export default PlayerCard;