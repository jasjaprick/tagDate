import { PrismaClient, Prisma } from '@prisma/client';
import { activityData } from './mockData/mockActivities';
import { mockProfilesData} from './mockData/mockProfiles';
import { userData } from './mockData/mockUsers';
const prisma = new PrismaClient();


async function main() {
  console.log('Start seeding');
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id ${user.id}`);
  }
  for (const p of mockProfilesData) {
    const profile = await prisma.profile.create({
      data: p,
    });
    console.log(`Created profile with id ${profile.id}`);
  }
  for (const a of activityData) {
    const activity = await prisma.activity.create({
      data: a
    });
    console.log(`Created activity with id ${activity.id}`);
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