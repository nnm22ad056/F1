import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.grandPrix.createMany({
    data: [
      {
        location: 'Monaco',
        date: new Date('2024-05-26'),
        winnerId: 1, // Example driver ID
        car: 'Ferrari',
        laps: 78,
        time: '1:44:32.56',
      },
      {
        location: 'Silverstone',
        date: new Date('2024-07-07'),
        winnerId: 2, // Example driver ID
        car: 'Mercedes',
        laps: 52,
        time: '1:33:12.21',
      },
      // Add more records as needed
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  
