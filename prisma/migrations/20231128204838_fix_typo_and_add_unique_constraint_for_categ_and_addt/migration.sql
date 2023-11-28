/*
  Warnings:

  - You are about to drop the `Aditional` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AditionalToOrder` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AditionalToOrder" DROP CONSTRAINT "AditionalToOrder_aditionalId_fkey";

-- DropForeignKey
ALTER TABLE "AditionalToOrder" DROP CONSTRAINT "AditionalToOrder_orderId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "name" VARCHAR(25) NOT NULL;

-- DropTable
DROP TABLE "Aditional";

-- DropTable
DROP TABLE "AditionalToOrder";

-- CreateTable
CREATE TABLE "Additional" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Additional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalToOrder" (
    "orderId" TEXT NOT NULL,
    "additionalId" TEXT NOT NULL,

    CONSTRAINT "AdditionalToOrder_pkey" PRIMARY KEY ("additionalId","orderId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Additional_name_key" ON "Additional"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "AdditionalToOrder" ADD CONSTRAINT "AdditionalToOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalToOrder" ADD CONSTRAINT "AdditionalToOrder_additionalId_fkey" FOREIGN KEY ("additionalId") REFERENCES "Additional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
