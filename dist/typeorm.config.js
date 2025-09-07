"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./auth/user.entity");
const previsao_entity_1 = require("./previsao/entities/previsao.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'admin',
    database: process.env.DB_NAME || 'ondas',
    entities: [user_entity_1.User, previsao_entity_1.Previsao],
    migrations: ['src/migrations/*.{ts,js}'],
    synchronize: false,
});
