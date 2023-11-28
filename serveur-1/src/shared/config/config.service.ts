import { Injectable } from '@nestjs/common';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { DatabaseConfig } from '../database/database-config';

@Injectable()
export class ConfigService {
  readonly databaseDateFormat = 'YYYY-MM-DD';

  getDefaultDbConfig(): MysqlConnectionOptions {
    const entities = this.getEntities();
    const migrations = this.getMigrations();
    const databaseInformation = this.getDatabaseInformation();
    return {
      type: 'mysql',
      host: databaseInformation.host,
      port: databaseInformation.port,
      username: databaseInformation.username,
      password: databaseInformation.password,
      database: databaseInformation.database,
      entities,
      migrations,
      synchronize: false
    };
  }

  private getDatabaseInformation(): DatabaseConfig {
    return {
      host: this.getNodeArgument('DB_ADDRESS'),
      port: +this.getNodeArgument('DB_PORT'),
      username: this.getNodeArgument('DB_USERNAME'),
      password: this.getNodeArgument('DB_PASSWORD'),
      database: this.getNodeArgument('DATABASE')
    };
  }

  private getEntities(): string[] {
    return [`${process.cwd()}/dist/**/*.entity.js`];
  }

  private getMigrations(): string[] {
    return [`${process.cwd()}/dist/database/migrations/*.js`];
  }

  private getNodeArgument(arg: string): string {
    return process.env[arg];
  }
}
