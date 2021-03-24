-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rejections" INTEGER[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
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
CREATE TABLE "PossibleMatch" (
    "id" SERIAL NOT NULL,
    "UID1" INTEGER NOT NULL,
    "UID2" INTEGER NOT NULL,
    "myActivity" INTEGER NOT NULL,
    "partnerActivity" INTEGER NOT NULL,
    "isMatch" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_unique" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatch_UID1_unique" ON "PossibleMatch"("UID1");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatch_UID2_unique" ON "PossibleMatch"("UID2");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatch_myActivity_unique" ON "PossibleMatch"("myActivity");

-- CreateIndex
CREATE UNIQUE INDEX "PossibleMatch_partnerActivity_unique" ON "PossibleMatch"("partnerActivity");

-- AddForeignKey
ALTER TABLE "Profile" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD FOREIGN KEY ("postedBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatch" ADD FOREIGN KEY ("UID1") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatch" ADD FOREIGN KEY ("UID2") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatch" ADD FOREIGN KEY ("myActivity") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PossibleMatch" ADD FOREIGN KEY ("partnerActivity") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
