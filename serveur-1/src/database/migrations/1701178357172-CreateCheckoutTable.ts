import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCheckoutTable1701178357172 implements MigrationInterface {
  name = 'CreateCheckoutTable1701178357172';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`Checkout\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    await queryRunner.query(
      `CREATE TABLE \`Checkout_article\` (\`checkoutId\` int NOT NULL, \`articleId\` int NOT NULL, INDEX \`IDX_12d49ae97f89100d29ebf40814\` (\`checkoutId\`), INDEX \`IDX_8aa0ebb1e6e02ca1cf5f0a1949\` (\`articleId\`), PRIMARY KEY (\`checkoutId\`, \`articleId\`)) ENGINE=InnoDB`
    );
    await queryRunner.query(
      `ALTER TABLE \`Checkout_article\` ADD CONSTRAINT \`FK_12d49ae97f89100d29ebf408146\` FOREIGN KEY (\`checkoutId\`) REFERENCES \`Checkout\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE \`Checkout_article\` ADD CONSTRAINT \`FK_8aa0ebb1e6e02ca1cf5f0a1949c\` FOREIGN KEY (\`articleId\`) REFERENCES \`Article\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`Checkout_article\` DROP FOREIGN KEY \`FK_8aa0ebb1e6e02ca1cf5f0a1949c\``);
    await queryRunner.query(`ALTER TABLE \`Checkout_article\` DROP FOREIGN KEY \`FK_12d49ae97f89100d29ebf408146\``);
    await queryRunner.query(`DROP INDEX \`IDX_8aa0ebb1e6e02ca1cf5f0a1949\` ON \`Checkout_article\``);
    await queryRunner.query(`DROP INDEX \`IDX_12d49ae97f89100d29ebf40814\` ON \`Checkout_article\``);
    await queryRunner.query(`DROP TABLE \`Checkout_article\``);
    await queryRunner.query(`DROP TABLE \`Checkout\``);
  }
}
