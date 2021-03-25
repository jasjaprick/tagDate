import { Prisma } from "@prisma/client";

export const activityData: Prisma.ActivityUncheckedCreateInput[] = [
    { description : "drinking beers",
    tag: "beers",
    postedBy: 1 ,
    },
    { description : "going to the cinema",
    tag: "fun",
    postedBy: 2 ,
    },
    { description : "going out and have a good time",
    tag: "fun",
    postedBy: 3 ,
    },
    { description : "going fishing",
    tag: "fish",
    postedBy: 4,
    },
    { description : "eating seafood",
    tag: "fish",
    postedBy: 5,
    },
    { description : "getting fishes",
    tag: "fish",
    postedBy: 6
    },
    { description : "just up for a good time",
    tag: "fun",
    postedBy: 7
    },
    { description : "watching the world cup final",
    tag: "football",
    postedBy: 8
    },
    { description : "playing football",
    tag: "football",
    postedBy: 9
    },
    { description : "just Jorgeing around",
    tag: "beers",
    postedBy: 10
    },
    { description : "roller skating",
    tag: "fun",
    postedBy: 11
    },
    { description : "eating pizza with tuna",
    tag: "fish",
    postedBy: 12
    },
    { description : "a nice drink",
    tag: "beers",
    postedBy: 13
    }

   ]