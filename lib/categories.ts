import { prisma } from "@/lib/db";

export async function getChildrenCategories(parentId: string) {
  return await prisma.category.findMany({
    where: { parentId },
    select: { id: true, name: true },
  });
}