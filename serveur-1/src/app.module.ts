import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { ConfigModule } from './shared/config/config.module';
import { ConfigService } from './shared/config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.getDefaultDbConfig(),
      inject: [ConfigService]
    }),
    ConfigModule
  ]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
