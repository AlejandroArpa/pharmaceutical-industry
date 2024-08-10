import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({
		tableName: 'pacients',
		underscored: true
})

export class Pacients extends Model<Pacients> {
	@PrimaryKey
	@AutoIncrement
	@Column(DataType.INTEGER)
	id!: number;

	@Column(DataType.STRING)
	name!: string;

	@Column(DataType.INTEGER)
	age!: number;

	@Column(DataType.TEXT)
	medical_history!: string;

}
