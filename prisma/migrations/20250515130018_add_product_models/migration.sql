-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "max" INTEGER NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
