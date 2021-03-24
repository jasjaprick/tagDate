import { Activities } from './activities.interface';
import { Messages } from './messages.interface';

export interface Match {
  user1Id: number,
  user2Id: number,
  user1Activity: Activities,
  user2Activity: Activities,
  Messages: Messages[]
}