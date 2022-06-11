import { HoldType } from "src/domain/enums/hold-type.enum";
import { Sex } from "src/domain/enums/sex.enum";
import { Column, CreateDateColumn, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SpecialtyEntity } from "./specialty.entity";

@Entity({ name: 'doctors' })
export class DoctorEntity {
    @Index() @PrimaryGeneratedColumn() id: number;

    @Column({ name: 'first_name', length: 32 }) firstName: string;

    @Column({ name: 'last_name', length: 32 }) lastName: string;

    @Column({ type: 'enum', enum: Sex }) sex: Sex;

    @Column({ type: 'enum', enum: HoldType }) holdType: HoldType;

    @Column({ length: 32 }) latitude: string;

    @Column({ length: 32 }) longitude: string;

    @CreateDateColumn({ name: 'created_at' }) createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;

    @JoinTable()
    @ManyToMany(() => SpecialtyEntity, (specialtyEntity) => specialtyEntity.specialty, { eager: true }) specialties: SpecialtyEntity[];
}