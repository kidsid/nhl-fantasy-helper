import React from 'react';
import { createUseStyles } from 'react-jss';
import { DivisionModel } from '../../models';
import TeamCard from '../TeamCard/TeamCard';
import { TeamModel } from '../../models/index';

const divisionCardStyles = createUseStyles({
  divisionCard: {
    width: '40vw',
    padding: 40,
    textAlign: 'left',
    cursor: 'pointer',
    border: '1px solid',
    display: 'inline-block',
    margin: 10,
    verticalAlign: 'top'
  },
  divisionCardTitle: {
    font: {
      size: 20,
      weight: 900,
    }
  }
})

function DivisionCard(props: any) {
  
  const classes = divisionCardStyles();
  return (
    <div className={classes.divisionCard}>
      <div className={classes.divisionCardTitle}>{props.division.name}</div>
      {
        props.division.teams.map((team: TeamModel, index: number) => {
          return <TeamCard  teamName={team.name} abbr={team.abbreviation} key={index}/>
        })
      }
    </div>
  );
}

export default DivisionCard;