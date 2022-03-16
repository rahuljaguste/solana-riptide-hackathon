-- CreateTable
CREATE TABLE "Nft" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeOfReward" TEXT NOT NULL,
    "value" MONEY NOT NULL,
    "minimumSpendRequired" MONEY NOT NULL,
    "expiration" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nft_pkey" PRIMARY KEY ("id")
);
