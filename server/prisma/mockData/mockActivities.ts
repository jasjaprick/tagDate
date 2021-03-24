import { Prisma } from "@prisma/client";

export const activityData: Prisma.ActivityUncheckedCreateInput[] = [
    { description : "drinking beers until we vomit",
    tag: "beers",
    postedBy: 1 ,
    },
    { description : "going to the cinema and commit mass shooting",
    tag: "fun",
    postedBy: 2 ,
    },
    { description : "i will accept anything cause i am very sad",
    tag: "sadness",
    postedBy: 3 ,
    },
    { description : "playing with dolls cause that is a very comon thing to do on a first date",
    tag: "dolls",
    postedBy: 4,
    },
    { description : "whatever",
    tag: "whatever",
    postedBy: 5,
    },
    { description : "playing football",
    tag: "football",
    postedBy: 6
    }
   ]