-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "storeId" TEXT,
    "categories.key" TEXT,
    "name" TEXT,
    "title" TEXT,
    "url" TEXT,
    "parentId" VARCHAR(255),
    "image" TEXT,
    "store" INTEGER,
    "nameAr" TEXT,
    "nameKa" TEXT,
    "mediaWeb" TEXT,
    "mediaMobile" TEXT,
    "mediaWebAr" TEXT,
    "mediaMobileAr" TEXT,
    "mediaWebKa" TEXT,
    "mediaMobileKa" TEXT,
    "ctaUrl" TEXT,
    "bgColor" TEXT,
    "bg_color" TEXT,
    "thumbnail" TEXT,
    "level" INTEGER,
    "count" INTEGER,
    "facetName" TEXT,
    "_index" TEXT,
    "_score" INTEGER,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
