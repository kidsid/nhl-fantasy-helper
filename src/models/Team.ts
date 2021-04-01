import { ConferenceModel } from './Conference';
import { DivisionModel } from './Division';

export interface TeamModel {
    id: number;
    abbreviation: string;
    active: boolean;
    conference: ConferenceModel;
    division: DivisionModel;
    firstYearOfPlay: string;
    franchiseId: number;
    link: string;
    locationName: string;
    name: string;
    officialSiteUrl: string;
    shortName: string;
    teamName: string;
    venue: any;
}