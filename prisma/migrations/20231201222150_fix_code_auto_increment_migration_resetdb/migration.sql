-- AlterTable
CREATE SEQUENCE client_code_seq;
ALTER TABLE "Client" ALTER COLUMN "code" SET DEFAULT nextval('client_code_seq');
ALTER SEQUENCE client_code_seq OWNED BY "Client"."code";
