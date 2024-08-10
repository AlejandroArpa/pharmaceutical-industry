import { AutoIncrement, Column, DataType, HasMany, PrimaryKey, Table, Model } from "sequelize-typescript";
import { Prescriptions } from "./prescriptions.model";




@Table({
		tableName: 'meds',
		underscored: true
})


export class Meds extends Model<Meds> {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(DataType.STRING)
	name!: string;

	@Column(DataType.INTEGER)
	quantity!: number;

	@Column(DataType.DATE)
	expiration_date!: Date;

	@Column(DataType.DOUBLE)
	price!: number;

	@HasMany(()=>Prescriptions)
	prescriptions!: Prescriptions[];

}