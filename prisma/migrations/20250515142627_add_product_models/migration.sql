/*
  Warnings:

  - You are about to drop the column `productId` on the `Availability` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[availabilityId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_productId_fkey";

-- AlterTable
ALTER TABLE "Availability" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "availabilityId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Product_availabilityId_key" ON "Product"("availabilityId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_availabilityId_fkey" FOREIGN KEY ("availabilityId") REFERENCES "Availability"("id") ON DELETE SET NULL ON UPDATE CASCADE;
