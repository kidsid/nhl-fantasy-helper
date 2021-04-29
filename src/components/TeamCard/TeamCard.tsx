import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  teamCard: {
    padding: 10,
    width: '20vw',
    textAlign: 'left',
    cursor: 'pointer'
  },
  title: {
    font: {
      size: 20,
      weight: 500,
    },
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  teamIcon: {
    width: '40px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
});

function TeamCard(props: any) {
  const classes = useStyles();
  console.log('@abbr', );
  
  return (
    <div className={classes.teamCard}>
      <img className={classes.teamIcon} src={`/team-icons/${props.abbr}.png`} />
      <div className={classes.title}>{props.teamName}</div>
    </div>
  );
}

export default TeamCard;
