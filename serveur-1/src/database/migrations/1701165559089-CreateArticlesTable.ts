import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateArticlesTable1701165559089 implements MigrationInterface {
    name = 'CreateArticlesTable1701165559089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tconst\` varchar(255) NOT NULL, \`titleType\` varchar(255) NOT NULL, \`primaryTitle\` varchar(255) NOT NULL, \`originalTitle\` varchar(255) NOT NULL, \`startYear\` varchar(255) NOT NULL, \`endYear\` varchar(255) NOT NULL, \`runtimeMinutes\` varchar(255) NOT NULL, \`genres\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Article\``);
    }

}
