-- DropForeignKey
ALTER TABLE "contactCompanie" DROP CONSTRAINT "contactCompanie_companieId_fkey";

-- DropForeignKey
ALTER TABLE "location" DROP CONSTRAINT "location_companieId_fkey";

-- DropForeignKey
ALTER TABLE "note" DROP CONSTRAINT "note_companieId_fkey";

-- AddForeignKey
ALTER TABLE "contactCompanie" ADD CONSTRAINT "contactCompanie_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companie"("companieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companie"("companieId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companie"("companieId") ON DELETE CASCADE ON UPDATE CASCADE;
