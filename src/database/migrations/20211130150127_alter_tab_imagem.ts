import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
    .alterTable('tab_imagem', (table) => {
      table.integer('id_produto').unsigned().nullable().alter();
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
    .alterTable('tab_imagem', table => {
      table.integer('id_produto').unsigned().notNullable().alter();
    });
}