import { Injectable, Scope } from '@nestjs/common';
import { isEmpty } from 'lodash';

import { CheckoutEntity } from './checkout.entity';
import { AbstractMapper } from '../../common/abstract.mapper';
import { Checkout } from '../../types/checkouts';

@Injectable({ scope: Scope.TRANSIENT })
export class CheckoutMapper extends AbstractMapper<CheckoutEntity, Checkout> {
  apiToEntity(api: Checkout): CheckoutEntity {
    if (isEmpty(api)) {
      return null;
    }

    return {
      id: api.id,
      items: api.items
    };
  }

  entityToApi(entity: CheckoutEntity): Checkout {
    if (isEmpty(entity)) {
      return null;
    }

    return {
      id: entity.id,
      items: entity.items
    };
  }
}
