/*
  Warnings:

  - You are about to drop the column `fastestLaps` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `pointsId` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `wins` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `DriverId` on the `Points` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "fastestLaps",
DROP COLUMN "pointsId",
DROP COLUMN "wins";

-- AlterTable
ALTER TABLE "Points" DROP COLUMN "DriverId";
