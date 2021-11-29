import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_imagem', (table) => {
        table.increments('id',{primaryKey: true}).unique();
        table.integer('id_produto').unsigned().notNullable();
        table.foreign('id_produto').references('id').inTable('tab_produto');
        table.text('descricao').notNullable();
        table.text('img').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_imagem');
}

