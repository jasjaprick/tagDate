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
    },
    { description : "Let's go for a nice walk by the seaside",
    tag: "beach",
    postedBy: 14
    },
    { description : "I wanna get tanned in company",
    tag: "beach",
    postedBy: 15
    },
    { description : "Let's go playing beach volley",
    tag: "beach",
    postedBy: 16
    },
    { description : "I would like to see the stars tonight by the sea, but with someone special ",
    tag: "beach",
    postedBy: 17
    },
    { description : "Let's go to a chiringuito together!",
    tag: 'beach',
    postedBy: 18
    },
    { description : "It's nice outside, let's go out and hangout by the beach!",
    tag: 'beach',
    postedBy: 19
    },
    { description : "Let's go surfing together, or scuba-diving maybe!",
    tag: 'beach',
    postedBy: 20
    },
    { description : "Doesn't matter what we do, but bring the sun cream!",
    tag: 'beach',
    postedBy: 21
    },
    { description : "I know a pretty nice chiringuito where we can get the best gin&tonic in Barcelona",
    tag: 'beach',
    postedBy: 22
    },
    { description : "Let's have a nice picinic together by the beach",
    tag: 'beach',
    postedBy: 23
    },
    { description : "I wanna go surfing, bring your nice smile ;)",
    tag: 'beach',
    postedBy: 24
    },
    { description : "I want to build sandcastles with you",
    tag: 'beach',
    postedBy: 25
    },
    { description : "I just wanna chill in the sun",
    tag: 'beach',
    postedBy: 26
    },
    { description : "Let's have a cold drink under this hot sun #barceloneta",
    tag: 'beach',
    postedBy: 27
    }
   ]