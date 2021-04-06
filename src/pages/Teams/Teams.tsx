import React, { useEffect, useState } from "react";
import { ApiService, FantasyService } from "../../api/index";
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DivisionModel } from '../../models/index';
import DivisionCard from '../../components/DivisionCard/DivisionCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Team from '../Team/Team';

function Teams() {
  const [divisions, setDivisions] = useState(new Array<DivisionModel>())

  useEffect(() => {
    const fantasyService = new FantasyService(new ApiService());
    const unsubscribe$: Subject<null> = new Subject();

    fantasyService.getDivisions()
      .pipe(takeUntil(unsubscribe$))
      .subscribe((divisions: Array<DivisionModel>) => {
        setDivisions(divisions)
      })

    return () => {
      unsubscribe$.next();
      unsubscribe$.complete();
    }

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
