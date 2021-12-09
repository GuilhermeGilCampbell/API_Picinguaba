import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_categoria', (table) => {
        table.increments('id_categoria',{primaryKey: true}).unique();
        table.specificType('nome_categoria','VARCHAR(25)').notNullable().unique();
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_categoria');
}

