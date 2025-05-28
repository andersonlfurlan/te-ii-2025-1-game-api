import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertPlatforms1748391475880 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            INSERT INTO platforms (id, name, manufacture) 
            VALUES 
            ('1b725775-b4e0-488f-98d9-374fab6b4847', 'Xbox', 'Microsoft'),
            ('5866d82a-c610-4826-b2d7-59ec321bea28', 'Playstation', 'Sony')
            
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.query(`
            DELETE FROM platforms WHERE id = '1b725775-b4e0-488f-98d9-374fab6b4847';
             DELETE FROM platforms WHERE id = '5866d82a-c610-4826-b2d7-59ec321bea28'
            `)
    }

}
