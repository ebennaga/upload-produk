/*
  Warnings:

  - You are about to drop the column `Keterangan` on the `Upload` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Upload" DROP COLUMN "Keterangan",
ADD COLUMN     "KeteranganProduk" TEXT;
