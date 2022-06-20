import { SpecialtyType } from "../../domain/enums/specialty-type.enum";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'specialty' })
export class SpecialtyEntity {
    @Index() @PrimaryGeneratedColumn() id: number;

    @Column({ type: 'enum', enum: SpecialtyType, unique: true }) specialty: SpecialtyType;

    @CreateDateColumn({ name: 'created_at' }) createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}