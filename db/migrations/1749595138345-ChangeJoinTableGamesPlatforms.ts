import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeJoinTableGamesPlatforms1749595138345
  implements MigrationInterface
{
  name = 'ChangeJoinTableGamesPlatforms1749595138345';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "games_platforms" ("game_id" uuid NOT NULL, "platform_id" uuid NOT NULL, CONSTRAINT "PK_cdb61f85054648ce89d793ccab6" PRIMARY KEY ("game_id", "platform_id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_f9e04f584514472f66bcbb3706" ON "games_platforms" ("game_id") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2e1593966c1ae544ed7d859004" ON "games_platforms" ("platform_id") `,
    );
    await queryRunner.query(
      `ALTER TABLE "games_platforms" ADD CONSTRAINT "FK_f9e04f584514472f66bcbb37063" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "games_platforms" ADD CONSTRAINT "FK_2e1593966c1ae544ed7d8590048" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "games_platforms" DROP CONSTRAINT "FK_2e1593966c1ae544ed7d8590048"`,
    );
    await queryRunner.query(
      `ALTER TABLE "games_platforms" DROP CONSTRAINT "FK_f9e04f584514472f66bcbb37063"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_2e1593966c1ae544ed7d859004"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_f9e04f584514472f66bcbb3706"`,
    );
    await queryRunner.query(`DROP TABLE "games_platforms"`);
  }
}
