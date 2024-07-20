/*
  Warnings:

  - You are about to drop the column `bookDetailId` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_bookDetailId_fkey";

-- DropIndex
DROP INDEX "Book_bookDetailId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "bookDetailId";

-- AddForeignKey
ALTER TABLE "BookDetail" ADD CONSTRAINT "BookDetail_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
