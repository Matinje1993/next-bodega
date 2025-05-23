/*
  Warnings:

  - The `productId` column on the `Availability` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CategoryOnProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `productId` column on the `DeliveryFee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `productId` on the `CategoryOnProduct` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `productId` on the `Offer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_productId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnProduct" DROP CONSTRAINT "CategoryOnProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryFee" DROP CONSTRAINT "DeliveryFee_productId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_productId_fkey";

-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER;

-- AlterTable
ALTER TABLE "CategoryOnProduct" DROP CONSTRAINT "CategoryOnProduct_pkey",
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD CONSTRAINT "CategoryOnProduct_pkey" PRIMARY KEY ("productId", "categoryId");

-- AlterTable
ALTER TABLE "DeliveryFee" DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER;

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "DeliveryFee_productId_key" ON "DeliveryFee"("productId");

-- AddForeignKey
ALTER TABLE "CategoryOnProduct" ADD CONSTRAINT "CategoryOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryFee" ADD CONSTRAINT "DeliveryFee_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
