/*
  Warnings:

  - Made the column `code` on table `Client` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
CREATE SEQUENCE client_code_seq;
ALTER TABLE "Client" ALTER COLUMN "code" SET NOT NULL,
ALTER COLUMN "code" SET DEFAULT nextval('client_code_seq');
ALTER SEQUENCE client_code_seq OWNED BY "Client"."code";
