/*
  Warnings:

  - You are about to alter the column `relationship` on the `staff_dependent` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "staff_dependent" ALTER COLUMN "relationship" DROP DEFAULT,
ALTER COLUMN "relationship" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "stud_mod_performance" ALTER COLUMN "mark" DROP NOT NULL,
ALTER COLUMN "grade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "mobile_phone" DROP NOT NULL,
ALTER COLUMN "home_phone" DROP NOT NULL;

-- RenameForeignKey
ALTER TABLE "course" RENAME CONSTRAINT "fk_course_offered_by" TO "course_offered_by_fk";

-- RenameForeignKey
ALTER TABLE "stud_mod_performance" RENAME CONSTRAINT "stud_mod_performance_adm_no_fk" TO "stud_mod_performance_adm_no_fkey";

-- RenameForeignKey
ALTER TABLE "stud_mod_performance" RENAME CONSTRAINT "stud_mod_performance_mod_code_fk" TO "stud_mod_performance_mod_registered_fkey";
