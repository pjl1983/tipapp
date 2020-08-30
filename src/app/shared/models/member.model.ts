import { GroupModel } from './group.model';

export interface MemberModel {
  id: number;
  firstName: string;
  lastName: string;
  groups: GroupModel[];
}
