import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableGame1749562049151 implements MigrationInterface {
  name = 'CreateTableGame1749562049151';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "games" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "category" character varying NOT NULL, "image" character varying, "launchDate" date NOT NULL, "price" numeric(10,2) NOT NULL, CONSTRAINT "UQ_06734e8b047d4cd535598fcde0e" UNIQUE ("title"), CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "game_platforms" ("game_id" uuid NOT NULL, "platform_id" uuid NOT NULL, CONSTRAINT "PK_bc1908c8bd4e55552a5b3e77649" PRIMARY KEY ("game_id", "platform_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_fe8420bd4e5a1de39654a2e99f" ON "game_platforms" ("game_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4bc36416ba58bc3f422dfea0bb" ON "game_platforms" ("platform_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "game_platforms" ADD CONSTRAINT "FK_fe8420bd4e5a1de39654a2e99f8" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "game_platforms" ADD CONSTRAINT "FK_4bc36416ba58bc3f422dfea0bb4" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "game_platforms" DROP CONSTRAINT "FK_4bc36416ba58bc3f422dfea0bb4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "game_platforms" DROP CONSTRAINT "FK_fe8420bd4e5a1de39654a2e99f8"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4bc36416ba58bc3f422dfea0bb"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_fe8420bd4e5a1de39654a2e99f"`,
    );
    await queryRunner.query(`DROP TABLE "game_platforms"`);
    await queryRunner.query(`DROP TABLE "games"`);
  }
}
