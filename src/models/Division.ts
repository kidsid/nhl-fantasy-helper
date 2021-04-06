import { ConferenceModel } from './Conference';
export interface DivisionModel {
    id: number;
    abbreviation: string;
    conference: ConferenceModel;
    active: boolean;
    link: string;
    name: string;
}