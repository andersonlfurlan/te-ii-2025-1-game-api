import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GameEntity } from '../game/game.entity';

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

  @ManyToMany(() => GameEntity, (game) => game.platforms)
  games: GameEntity[];
}
