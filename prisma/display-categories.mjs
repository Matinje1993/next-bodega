import { PrismaClient } from '../lib/generated/prisma/index.js'; // adjust path if needed

const prisma = new PrismaClient();

async function displayCategories(parentId = null, level = 0) {
  const categories = await prisma.category.findMany({
    where: { parentId },
    orderBy: { name: 'asc' },
  });

  for (const cat of categories) {
    console.log(`${'  '.repeat(level)}- ${cat.name} (ID: ${cat.id})`);
    await displayCategories(cat.id, level + 1); // Recursive for children
  }
}

async function main() {
  console.log('📚 Category Tree:\n');
  await displayCategories();
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });