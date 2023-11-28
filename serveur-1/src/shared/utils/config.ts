import * as path from 'path';

import { ConfigService } from '../config/config.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require(path.join(process.cwd(), 'package.json'));

export interface Config {
  apiVersion: string;
}

export const config: Config = packageJSON.config;
export const configService = new ConfigService();
