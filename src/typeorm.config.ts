import { DataSource } from 'typeorm';
import { User } from './auth/user.entity';
import { Previsao } from './previsao/entities/previsao.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASS || 'admin',
  database: process.env.DB_NAME || 'ondas',
  entities: [User, Previsao],
  migrations: ['src/migrations/*.{ts,js}'],
  synchronize: false,
});

