import { TeamModel } from './team.model';

export interface GameModel {
  home: TeamModel;
  away: TeamModel;
  stadium: string;
  date: Date;
}
