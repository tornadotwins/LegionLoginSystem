import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsernameToUser1681881950933 implements MigrationInterface {
  name = 'AddUsernameToUser1681881950933';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "username" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
  }
}
