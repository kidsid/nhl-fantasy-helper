import React from 'react';
import { getTeams } from '../../api/api.service';

function Teams() {
    getTeams();
    return (
        <div>
            Teams Page
        </div>
    );
}

export default Teams;