/*
  Warnings:

  - You are about to drop the `staffDependent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "staffDependent";

-- CreateTable
CREATE TABLE "staff_dependent" (
    "staff_no" CHAR(4) NOT NULL,
    "dependent_name" VARCHAR(30) NOT NULL,
    "relationship" TEXT NOT NULL DEFAULT 'dependent',

    CONSTRAINT "staff_dependent_pkey" PRIMARY KEY ("staff_no","dependent_name")
);
