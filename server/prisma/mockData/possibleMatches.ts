import { Prisma } from ".prisma/client";

export const possibleMatchData: Prisma.PossibleMatchUncheckedCreateInput[] = [
  {
    UID1: 1,
    UID2: 2,
  },
  {
    UID1: 2,
    UID2: 3,
  }
];
