import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePlatform1747181997214 implements MigrationInterface {
    name = 'CreateTablePlatform1747181997214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "platforms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "manufacture" character varying, CONSTRAINT "PK_3b879853678f7368d46e52b81c6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "platforms"`);
    }

}
