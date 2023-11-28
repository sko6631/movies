import { DataSource } from 'typeorm';

import { configService } from '../shared/utils/config';

export default new DataSource(configService.getDefaultDbConfig());
