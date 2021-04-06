import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  teamCard: {
    padding: 40,
    textAlign: 'left',
    cursor: 'pointer',
    border: '1px solid'
  },
  title: {
    font: {
      size: 20,
      weight: 5000,
    },
  },
});

function TeamCard(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.teamCard}>
      <div className={classes.title}>{props.teamName}</div>
    </div>
  );
}

export default TeamCard;
