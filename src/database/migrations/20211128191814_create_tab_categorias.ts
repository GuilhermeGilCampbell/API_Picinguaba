import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_categoria', (table) => {
        table.increments('id',{primaryKey: true}).unique();
        table.specificType('nome','VARCHAR(25)').notNullable().unique();
        table.text('descricao').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_categoria');
}

