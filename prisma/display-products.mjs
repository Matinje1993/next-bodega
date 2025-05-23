import { PrismaClient } from '../lib/generated/prisma/index.js'; // adjust path if needed

const prisma = new PrismaClient();

const productWithRelations = await prisma.product.findUnique({
  where: { id: 239241 },
  include: {
    brand: true,
    category: {
      select: {
        category: {
          select: {
            id: true,
            level: true,
            name: true,
            url: true,
          },
        },
      },
    },
    price: true,
    stock: true,
    unit: true,
    availability: true,
    offers: true,
    links: true,
  },
});

const formattedProduct = {
  ...productWithRelations,
  category: productWithRelations.category.map(item => item.category),
};

console.log(JSON.stringify(formattedProduct, null, 2));