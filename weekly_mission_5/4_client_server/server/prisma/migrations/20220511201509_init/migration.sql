/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Explorer2` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Explorer2_name_key" ON "Explorer2"("name");
