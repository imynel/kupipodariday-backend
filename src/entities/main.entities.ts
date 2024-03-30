import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class MainEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
