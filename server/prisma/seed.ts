import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Johnnie',
    age: 28,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
  },
  {
    name: 'Beckie',
    age: 27,
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
  },
  {
    name: 'Diana',
    age: 28,
    gender: 'female',
    interestedIn: 'female',
    location: 'Barcelona',
  },
  {
    name: 'Toby',
    age: 30,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
  },
  {
    name: 'Johnie II',
    age: 28,
    gender: 'male',
    interestedIn: 'female',
    location: 'Barcelona',
  },
  {
    name: 'Lulu',
    age: 28,
    gender: 'female',
    interestedIn: 'male',
    location: 'Barcelona',
  },
];

async function main() {
  console.log('Start seeding');
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id ${user.id}`);
  }
  console.log('Seeding finished.');
}

main()
.catch((err) => {
  console.log(err);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});