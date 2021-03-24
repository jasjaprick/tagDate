import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Johnnie',
    age: 28,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    email: 'johnnie@example.com',
    password: 'jonny'
  },
  {
    name: 'Beckie',
    age: 27,
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
    email: 'beckie@example.com',
    password: 'beckie'
  },
  {
    name: 'Diana',
    age: 28,
    gender: 'female',
    interestedIn: 'female',
    location: 'Barcelona',
    email: 'diana@example.com',
    password: 'diana'
  },
  {
    name: 'Toby',
    age: 30,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    email: 'toby@example.com',
    password: 'toby'
  },
  {
    name: 'Johnie II',
    age: 28,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
    email: 'johnnie2@example.com',
    password: 'jonny2'
  },
  {
    name: 'Lulu',
    age: 28,
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
    email: 'lulu@example.com',
    password: 'lulu'
  },
];

const activityData: Prisma.ActivityUncheckedCreateInput[] = [
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

async function main() {
  console.log('Start seeding');
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id ${user.id}`);
  }
  console.log('Seeding finished.');
  for (const a of activityData) {
    const activity = await prisma.activity.create({
      data: a
    })
    console.log(`Created activity with id ${activity.id}`);
  }
}

main()
.catch((err) => {
  console.log(err);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});