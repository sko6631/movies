import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';

import { CheckoutService } from './checkout.service';
import { Checkout } from '../../types/checkouts';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  create(@Body() checkout: Checkout): Observable<Checkout> {
    return this.checkoutService.create(checkout);
  }
}
