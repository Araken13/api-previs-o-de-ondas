import { Injectable } from '@nestjs/common';

@Injectable()
export class PrevisaoService {
  getPrevisao(): string {
    return 'Previsão de ondas: 1.5m, direção NE';
  }
}

