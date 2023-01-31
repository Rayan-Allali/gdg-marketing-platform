-- CreateTable
CREATE TABLE "note" (
    "idNote" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "guestId" INTEGER,
    "companieId" INTEGER,

    CONSTRAINT "note_pkey" PRIMARY KEY ("idNote")
);

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "guest"("guestId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companie"("companieId") ON DELETE SET NULL ON UPDATE CASCADE;
