import { Prisma } from ".prisma/client";

export const possibleMatchData: Prisma.PossibleMatchUncheckedCreateInput[] = [
  {
    UID1: 1,
    UID2: 13,
    myActivity: 1,
    partnerActivity: 13
  },
  {
    UID1: 2,
    UID2: 7,
    myActivity: 2,
    partnerActivity: 7
  },
  {
    UID1: 11,
    UID2: 2,
    myActivity: 11,
    partnerActivity: 2
  },
  {
    UID1: 4,
    UID2: 6,
    myActivity: 4,
    partnerActivity: 6
  },
  {
    UID1: 12,
    UID2: 4,
    myActivity: 12,
    partnerActivity: 4
  },
  {
    UID1: 11,
    UID2: 7,
    myActivity: 1,
    partnerActivity: 11
  },
];
