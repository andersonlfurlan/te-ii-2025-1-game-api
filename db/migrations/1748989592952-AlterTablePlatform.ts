import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTablePlatform1748989592952 implements MigrationInterface {
  name = 'AlterTablePlatform1748989592952';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "platforms" ADD "version" character varying(20)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "platforms" DROP COLUMN "version"`);
  }
}
