import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CheckoutController } from './checkout.controller';
import { CheckoutEntity } from './checkout.entity';
import { CheckoutMapper } from './checkout.mapper';
import { CheckoutService } from './checkout.service';

@Module({
  imports: [TypeOrmModule.forFeature([CheckoutEntity])],
  providers: [CheckoutService, CheckoutMapper],
  exports: [CheckoutMapper],
  controllers: [CheckoutController]
})
export class CheckoutModule {}
