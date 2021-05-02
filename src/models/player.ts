import { PersonModel } from './Person';
import { PositionModel } from './position';

export interface PlayerModel {
  jerseyNumber: string;
  person: PersonModel;
  position: PositionModel;
}