-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CUSTOMER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "canDonate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "roles" "Role"[];
