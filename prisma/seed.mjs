import { PrismaClient } from '../lib/generated/prisma/index.js'; // adjust as needed
import fs from 'fs';

const prisma = new PrismaClient();
const rawData = fs.readFileSync('./prisma/categories.json');
const topCategories = JSON.parse(rawData);

// Recursive function to insert nested categories
async function insertCategory(data, parentId = null) {
  const { children = [], ...category } = data;

  const {
    id,
    storeId,
    name,
    title,
    url,
    image,
    store,
    nameAr,
    nameKa,
    mediaWeb,
    mediaMobile,
    mediaWebAr,
    mediaMobileAr,
    mediaWebKa,
    mediaMobileKa,
    ctaUrl,
    bgColor,
    bg_color,
    thumbnail,
    level,
    count,
    facetName,
    _index,
    _score,
    ['categories.key']: key,
  } = category;

  try {
    await prisma.category.create({
      data: {
        id,
        storeId,
        key,
        name,
        title,
        url,
        image,
        store: store ? Number(store) : null,
        nameAr,
        nameKa,
        mediaWeb,
        mediaMobile,
        mediaWebAr,
        mediaMobileAr,
        mediaWebKa,
        mediaMobileKa,
        ctaUrl,
        bgColor,
        bg_color,
        thumbnail,
        level,
        count,
        facetName,
        index: _index,
        score: _score,
        parentId,
      },
    });

    for (const child of children) {
      await insertCategory(child, id);
    }
  } catch (err) {
    console.error('Insert error for category ID:', id, err.message);
  }
}

async function main() {
  console.log('🧹 Deleting existing categories...');
  await prisma.categoryOnProduct.deleteMany();
  await prisma.category.deleteMany();

  console.log('📥 Seeding categories...');
  for (const group of topCategories) {
    await insertCategory(group);
  }
}

main()
  .then(() => {
    console.log('✅ Categories reseeded.');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });