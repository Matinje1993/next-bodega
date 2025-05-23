import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function getChildrenCategories(parentId: string) {
  return await prisma.category.findMany({
    where: { parentId },
    select: { id: true, name: true },
  });
}