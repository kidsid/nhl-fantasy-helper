import React from 'react';
import { createUseStyles } from 'react-jss';
import { DivisionModel } from '../../models';
// import {  } from '../../api/api.service';

const divisionCardStyles = createUseStyles({
  divisionCard: {
    width: '40vw',
    padding: 40,
    textAlign: 'left',
    cursor: 'pointer',
    border: '1px solid',
    display: 'inline-block',
    margin: 10
  },
  divisionCardTitle: {
    font: {
      size: 20,
      weight: 500,
    }
  }
})

function DivisionCard(props: any) {
  console.log('@divisions', props);
  
  const classes = divisionCardStyles();
  return (
    <div className={classes.divisionCard}>
      <div className={classes.divisionCardTitle}>{props.division.name}</div>
    </div>
  );
}

export default DivisionCard;