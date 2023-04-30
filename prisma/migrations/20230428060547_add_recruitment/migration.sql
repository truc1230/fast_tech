-- CreateTable
CREATE TABLE "Recruitment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "requirement" TEXT,
    "minSalary" INTEGER NOT NULL,
    "maxSalary" INTEGER NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Recruitment_pkey" PRIMARY KEY ("id")
);
