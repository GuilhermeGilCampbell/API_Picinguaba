import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
    .alterTable('tab_produto', (table) => {
      table.integer('id_contato').unsigned().nullable().alter();
    });
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
    .alterTable('tab_produto', table => {
      table.integer('id_contato').unsigned().notNullable().alter();
    });
}