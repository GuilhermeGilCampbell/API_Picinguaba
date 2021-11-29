import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_contato', (table) => {
        table.increments('id',{primaryKey: true}).unique();
        table.specificType('nome','VARCHAR(50)').notNullable().unique();
        table.text('descricao').notNullable;
        table.specificType('telefone','VARCHAR(15)');
        table.specificType('email','VARCHAR(50)');
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_contato');
}

