import { Model, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, PrimaryKey, Table } from "sequelize-typescript";
import { Meds } from "./meds.model";




@Table({
		tableName: 'prescriptions',
		underscored: true
})

export class Prescriptions extends Model<Prescriptions> {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(DataType.DOUBLE)
	dosis!: number;

	@Column(DataType.INTEGER)
	frecuency!: number;

	@Column(DataType.INTEGER)
	duration!: number;

	@ForeignKey(()=>Meds)
	@Column(DataType.INTEGER)

	@BelongsTo(()=>Meds)
	meds!: Meds;

}