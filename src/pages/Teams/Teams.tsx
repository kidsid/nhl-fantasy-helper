import React, { useEffect, useState } from "react";
import { fetchDivisions } from "../../api/api.service";
import { DivisionModel } from '../../models/index';
import DivisionCard from '../../components/DivisionCard/DivisionCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Team from '../Team/Team';

function Teams() {
  const [divisions, setDivisions] = useState(new Array<DivisionModel>())

  useEffect(() => {
    fetchDivisions().then((res: Array<DivisionModel>) => {
      setDivisions(res);
    })
  }, [])

  return (
    <div>
      {
        divisions.map((division: DivisionModel, index: number) => {
          return <DivisionCard division={division} key={index}></DivisionCard>
        })
      }
    </div>
  );
}

export default Teams;
