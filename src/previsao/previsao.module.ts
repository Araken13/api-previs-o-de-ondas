import { Module } from '@nestjs/common';
import { PrevisaoService } from './previsao.service';
import { PrevisaoController } from './previsao.controller';

@Module({
  providers: [PrevisaoService],
  controllers: [PrevisaoController],
})
export class PrevisaoModule {}

