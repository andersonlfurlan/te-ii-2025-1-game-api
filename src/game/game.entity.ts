import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { PlatformEntity } from '../platform/platform.entity';

@Entity({ name: 'games' })
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: 'date' })
  launchDate: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @ManyToMany(() => PlatformEntity, (platform) => platform.games)
  @JoinTable({
    name: 'games_platforms',
    joinColumn: { name: 'game_id' },
    inverseJoinColumn: { name: 'platform_id' },
  })
  platforms: PlatformEntity[];
}
