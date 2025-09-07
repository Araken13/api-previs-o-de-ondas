import { Controller, Get } from '@nestjs/common';
import { PrevisaoService } from './previsao.service';

@Controller('previsao')
export class PrevisaoController {
  constructor(private readonly previsaoService: PrevisaoService) {}

  @Get()
  getPrevisao(): string {
    return this.previsaoService.getPrevisao();
  }
}

