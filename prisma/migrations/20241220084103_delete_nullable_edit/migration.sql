/*
  Warnings:

  - Made the column `KeteranganProduk` on table `Upload` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Upload" ALTER COLUMN "KeteranganProduk" SET NOT NULL,
ALTER COLUMN "KeteranganProduk" DROP DEFAULT;
