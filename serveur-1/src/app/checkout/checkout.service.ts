import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, map } from 'rxjs';
import { Repository } from 'typeorm';

import { CheckoutEntity } from './checkout.entity';
import { CheckoutMapper } from './checkout.mapper';
import { Checkout } from '../../types/checkouts';

@Injectable()
export class CheckoutService {
  constructor(
    @InjectRepository(CheckoutEntity) private checkoutRepository: Repository<CheckoutEntity>,
    protected readonly checkoutMapper: CheckoutMapper
  ) {}

  create(api: Checkout): Observable<Checkout> {
    return from(this.checkoutRepository.save(this.checkoutMapper.apiToEntity(api))).pipe(
      map((newEntity: CheckoutEntity): Checkout => this.checkoutMapper.entityToApi(newEntity))
    );
  }
}
