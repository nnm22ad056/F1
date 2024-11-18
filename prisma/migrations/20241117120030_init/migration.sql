-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "nationality" TEXT NOT NULL,
    "wins" INTEGER NOT NULL,
    "podiums" INTEGER NOT NULL,
    "championships" INTEGER NOT NULL,
    "fastestLaps" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "pointsId" INTEGER NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrandPrix" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "winnerId" INTEGER NOT NULL,
    "car" TEXT NOT NULL,
    "laps" INTEGER NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "GrandPrix_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "rank" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "Car" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Points" (
    "id" SERIAL NOT NULL,
    "points" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "DriverId" INTEGER NOT NULL,
    "driverId" INTEGER NOT NULL,

    CONSTRAINT "Points_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GrandPrix" ADD CONSTRAINT "GrandPrix_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Points" ADD CONSTRAINT "Points_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
