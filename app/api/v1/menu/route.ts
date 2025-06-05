import { NextResponse } from 'next/server';
import { prisma } from "@/lib/db";

// Recursively format category and its children
function formatCategory(cat: any): any {
  return {
    storeId: cat.storeId,
    id: cat.id,
    "categories.key": cat.key,
    name: cat.name,
    title: cat.title,
    url: cat.url,
    parent: cat.parentId || "",
    image: cat.image,
    store: cat.store,
    nameAr: cat.nameAr,
    mediaWeb: cat.mediaWeb,
    mediaMobile: cat.mediaMobile,
    ctaUrl: cat.ctaUrl,
    bgColor: cat.bgColor,
    thumbnail: cat.thumbnail,
    mediaWebAr: cat.mediaWebAr,
    mediaMobileAr: cat.mediaMobileAr,
    nameKa: cat.nameKa,
    mediaMobileKa: cat.mediaMobileKa,
    mediaWebKa: cat.mediaWebKa,
    level: cat.level,
    _index: cat.index,
    _id: `${cat.id}_${cat.storeId}`,
    _score: cat.score || 0,
    media_web: cat.mediaWeb,
    media_mobile: cat.mediaMobile,
    bg_color: cat.bg_color,
    count: cat.count,
    facetName: cat.facetName,
    children: cat.children?.map(formatCategory) || []
  };
}

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: 'asc' },
    });

    const categoryMap: Record<string, any> = {};
    categories.forEach(cat => {
      categoryMap[cat.id] = { ...cat, children: [] };
    });

    // Link children to their parents
    for (const cat of categories) {
      if (cat.parentId && categoryMap[cat.parentId]) {
        categoryMap[cat.parentId].children.push(categoryMap[cat.id]);
      }
    }

    const topLevelCategories = Object.values(categoryMap).filter(cat => !cat.parentId);
    const formattedTopCategories = topLevelCategories.map(formatCategory);

    const result = [
      {
        url: "#",
        styleAttribute: "allCategories",
        title: "All Categories",
        children: formattedTopCategories
      },
      ...formattedTopCategories
    ];

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error generating menu:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}