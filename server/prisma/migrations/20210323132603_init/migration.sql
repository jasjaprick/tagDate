-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "interestedIn" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "profilePicture" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "postedBy" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PossibleMatches" (
    "id" SERIAL NOT NULL,
    "UID1" INTEGER NOT NULL,
    "UID2" INTEGER NOT NULL,
    "myActivity" INTEGER NOT NULL,
    "partnerActivity" INTEGER NOT NULL,
    "isMatch" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_rejections" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_postedBy_unique" ON "Activity"("postedBy");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatches_UID1_unique" ON "PossibleMatches"("UID1");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatches_UID2_unique" ON "PossibleMatches"("UID2");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatches_myActivity_unique" ON "PossibleMatches"("myActivity");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatches_partnerActivity_unique" ON "PossibleMatches"("partnerActivity");

-- CreateIndex
CREATE UNIQUE INDEX "_rejections_AB_unique" ON "_rejections"("A", "B");

-- CreateIndex
CREATE INDEX "_rejections_B_index" ON "_rejections"("B");

-- AddForeignKey
ALTER TABLE "Activity" ADD FOREIGN KEY ("postedBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatches" ADD FOREIGN KEY ("UID1") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatches" ADD FOREIGN KEY ("UID2") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatches" ADD FOREIGN KEY ("myActivity") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatches" ADD FOREIGN KEY ("partnerActivity") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rejections" ADD FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_rejections" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
