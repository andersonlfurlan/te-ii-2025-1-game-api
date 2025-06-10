import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertPlatforms1748391475880 implements MigrationInterface {
  public up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
            INSERT INTO platforms (id, name, manufacture) 
            VALUES 
            ('1b725775-b4e0-488f-98d9-374fab6b4847', 'Xbox', 'Microsoft'),
            ('5866d82a-c610-4826-b2d7-59ec321bea28', 'Playstation', 'Sony'),
            ('d3f8c1b2-4e5a-4c6b-9f8d-3e7f8a1b2c3d', 'Nintendo Switch', 'Nintendo'),
            ('56461440-b476-4503-ad16-358863864185', 'PC', 'Windows/Linux/Mac'),            
            ('22339b4b-1848-4eec-9413-a3d4d14e09c1', 'Mobile', 'Android/iOS');

        `);
  }

  public down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
            DELETE FROM platforms WHERE id = '1b725775-b4e0-488f-98d9-374fab6b4847';
            DELETE FROM platforms WHERE id = '5866d82a-c610-4826-b2d7-59ec321bea28';
            DELETE FROM platforms WHERE id = 'd3f8c1b2-4e5a-4c6b-9f8d-3e7f8a1b2c3d';
            DELETE FROM platforms WHERE id = '56461440-b476-4503-ad16-358863864185';
            DELETE FROM platforms WHERE id = '22339b4b-1848-4eec-9413-a3d4d14e09c1';
        `);
  }
}
