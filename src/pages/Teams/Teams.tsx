import React, { useEffect, useState } from "react";
import { ApiService, FantasyService } from "../../api/index";
import { DivisionModel } from '../../models/index';
import DivisionCard from '../../components/DivisionCard/DivisionCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Team from '../Team/Team';

function Teams() {
  const [divisions, setDivisions] = useState(new Array<DivisionModel>())

  const fantasyService = new FantasyService(new ApiService());

  useEffect(() => {
    fantasyService.getDivisions().subscribe((divisions: Array<DivisionModel>) => {
      setDivisions(divisions)
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
