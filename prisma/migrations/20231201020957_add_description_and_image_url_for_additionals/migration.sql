/*
  Warnings:

  - Added the required column `description` to the `Additional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Additional` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Additional_name_key";

-- AlterTable
ALTER TABLE "Additional" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;
