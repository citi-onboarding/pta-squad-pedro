/*
  Warnings:

  - Added the required column `animalType` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "animalType" AS ENUM ('DOG', 'CAT', 'PIG', 'COW', 'SHEEP', 'HORSE');

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "animalType" "animalType" NOT NULL;
