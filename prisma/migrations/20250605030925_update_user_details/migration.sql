-- AlterTable
ALTER TABLE "User" ADD COLUMN     "acceptedTerms" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscribe" BOOLEAN NOT NULL DEFAULT false;
