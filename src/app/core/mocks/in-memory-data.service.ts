import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MemberModel } from '../../shared/models/member.model';
import { GameModel } from '../../shared/models/game.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const member: MemberModel = {
      id: 1,
      firstName: 'Philip',
      lastName: 'Lanphar',
      groups: [
        {
          name: 'Bavaria Westside',
        }
      ]
    };
    const games: GameModel[] = [
      {
        home: {
          name: 'FC Bayern München',
          logo: 'https://content.sportslogos.net/logos/132/4069/full/376_-bayern_munich-primary-.gif'
        },
        away: {
          name: 'Borussia Dortmund',
          logo: 'https://content.sportslogos.net/logos/132/4072/full/789_-borussia_dortmund-primary-.gif'
        },
        stadium: 'Allianz Arena',
        date: new Date(2020, 8, 24, 15, 0, 0, 0)
      }
    ];

    return {member, games};
  }
}
