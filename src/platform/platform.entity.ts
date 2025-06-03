import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'platforms' })
export class PlatformEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  manufacture: string;

  @Column({ nullable: true, length: 20 })
  version: string;
}
