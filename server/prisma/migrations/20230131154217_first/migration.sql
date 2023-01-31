-- CreateTable
CREATE TABLE "admin" (
    "adminId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("adminId")
);

-- CreateTable
CREATE TABLE "guest" (
    "guestId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "guest_pkey" PRIMARY KEY ("guestId")
);

-- CreateTable
CREATE TABLE "contactGuest" (
    "contactId" SERIAL NOT NULL,
    "contactType" TEXT NOT NULL,
    "contactValue" TEXT NOT NULL,
    "guestId" INTEGER NOT NULL,

    CONSTRAINT "contactGuest_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "role" (
    "roleId" SERIAL NOT NULL,
    "roleType" TEXT NOT NULL,
    "roleValue" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "companie" (
    "companieId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "companie_pkey" PRIMARY KEY ("companieId")
);

-- CreateTable
CREATE TABLE "contactCompanie" (
    "contactId" SERIAL NOT NULL,
    "contactType" TEXT NOT NULL,
    "contactValue" TEXT NOT NULL,
    "companieId" INTEGER NOT NULL,

    CONSTRAINT "contactCompanie_pkey" PRIMARY KEY ("contactId")
);

-- CreateTable
CREATE TABLE "location" (
    "LocatinId" SERIAL NOT NULL,
    "Latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "companieId" INTEGER NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("LocatinId")
);

-- CreateTable
CREATE TABLE "event" (
    "eventId" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "attend" (
    "eventId" INTEGER NOT NULL,
    "guestId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "attend_pkey" PRIMARY KEY ("eventId","guestId")
);

-- CreateTable
CREATE TABLE "_guestTorole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_companieTorole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_guestTorole_AB_unique" ON "_guestTorole"("A", "B");

-- CreateIndex
CREATE INDEX "_guestTorole_B_index" ON "_guestTorole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_companieTorole_AB_unique" ON "_companieTorole"("A", "B");

-- CreateIndex
CREATE INDEX "_companieTorole_B_index" ON "_companieTorole"("B");

-- AddForeignKey
ALTER TABLE "contactGuest" ADD CONSTRAINT "contactGuest_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "guest"("guestId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contactCompanie" ADD CONSTRAINT "contactCompanie_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companie"("companieId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companie"("companieId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attend" ADD CONSTRAINT "attend_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("eventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attend" ADD CONSTRAINT "attend_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "guest"("guestId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_guestTorole" ADD CONSTRAINT "_guestTorole_A_fkey" FOREIGN KEY ("A") REFERENCES "guest"("guestId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_guestTorole" ADD CONSTRAINT "_guestTorole_B_fkey" FOREIGN KEY ("B") REFERENCES "role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_companieTorole" ADD CONSTRAINT "_companieTorole_A_fkey" FOREIGN KEY ("A") REFERENCES "companie"("companieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_companieTorole" ADD CONSTRAINT "_companieTorole_B_fkey" FOREIGN KEY ("B") REFERENCES "role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE;
