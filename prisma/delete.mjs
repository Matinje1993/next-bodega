import { PrismaClient } from '../lib/generated/prisma/index.js'; // adjust as needed
import fs from 'fs';

const prisma = new PrismaClient();

async function deleteAllOrdersAndItems() {
  // Delete OrderItems first
  await prisma.orderItem.deleteMany({});
  // Then delete Orders
  await prisma.order.deleteMany({});
  console.log('All Order and OrderItem records deleted');
}

deleteAllOrdersAndItems()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });