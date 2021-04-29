import { ConferenceModel } from './Conference';
import { TeamModel } from './Team';
export interface DivisionModel {
    id: number;
    abbreviation: string;
    conference: ConferenceModel;
    active: boolean;
    link: string;
    name: string;

    teams?: Array<TeamModel>;
}