/*
  Warnings:

  - You are about to drop the column `deletedDate` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `deletedDate` on the `Recruitment` table. All the data in the column will be lost.
  - You are about to drop the column `deletedDate` on the `Solution` table. All the data in the column will be lost.
  - You are about to drop the column `deletedDate` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "deletedDate";

-- AlterTable
ALTER TABLE "Recruitment" DROP COLUMN "deletedDate";

-- AlterTable
ALTER TABLE "Solution" DROP COLUMN "deletedDate";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedDate";
