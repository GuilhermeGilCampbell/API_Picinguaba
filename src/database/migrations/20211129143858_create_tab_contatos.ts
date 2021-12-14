import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_contato', (table) => {
        table.increments('id_contato',{primaryKey: true}).unique();
        table.specificType('nome_contato','VARCHAR(50)').notNullable().unique();
        table.text('descricao_contato').notNullable;
        table.specificType('telefone_contato','VARCHAR(15)');
        table.specificType('email_contato','VARCHAR(50)');
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_contato');
}

