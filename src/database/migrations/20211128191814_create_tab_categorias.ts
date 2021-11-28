import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_categorias', (table) => {
        table.increments('id',{primaryKey: true}).unique();
        table.specificType('nome','VARCHAR(25)').notNullable().unique();
        table.specificType('descricao','TEXT').notNullable;
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_categorias');
}

