-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "landmark" TEXT,
    "instructions" TEXT,
    "deliveryInstructions" TEXT,
    "country" TEXT NOT NULL DEFAULT '+254',
    "phone" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "addressLabel" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Address_clerkUserId_idx" ON "Address"("clerkUserId");
