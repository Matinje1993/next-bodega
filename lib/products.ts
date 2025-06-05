import { prisma } from "@/lib/db";

type ProductSortKeys = "createdAt" | "updatedAt" | "name" | "id" | "ean" | "type";

export async function getProductsAndBrandsByCategory(
  categoryId: string,
  page = 1,
  limit = 10,
  sort: ProductSortKeys = "createdAt",
  order: "asc" | "desc" = "desc"
) {
  const skip = (page - 1) * limit;

  // Fetch products in category with their brand info
  const categoryProducts = await prisma.categoryOnProduct.findMany({
    where: {
      categoryId,
    },
    skip,
    take: limit,
    orderBy: {
      product: {
        [sort]: order,
      },
    },
    select: {
      product: {
        select: {
          id: true,
          name: true,
          brandId: true,
          brand: {
            select: {
              id: true,
              name: true,
            },
          },
          price: {
            select: {
              formattedValue: true,
            },
          },
        },
      },
    },
  });

  // Extract products array
  const products = categoryProducts.map((cp) => cp.product);

  // Extract unique brands from products
  const brandMap = new Map<string, { id: string; name: string | null }>();
  products.forEach((product) => {
    if (product.brand) {
      brandMap.set(product.brand.id, product.brand);
    }
  });
  const brands = Array.from(brandMap.values());

  return {
    products,
    brands,
  };
}