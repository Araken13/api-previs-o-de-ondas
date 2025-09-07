import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Previsao {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  altura!: string;

  @Column()
  direcao!: string;

  @Column()
  periodo!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataRegistro!: Date;
}

