import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_produto', (table) => {
        table.increments('id',{primaryKey: true}).unique();
        table.specificType('nome','VARCHAR(50)').notNullable().unique();
        table.text('descricao').notNullable();
        table.double('preco');
        table.boolean('destaque').defaultTo(0);
        table.text('imagem');
        table.text('imagem_thumb');
        table.integer('id_contato').unsigned();
        table.foreign('id_contato').references('id_contato').inTable('tab_contato');
        table.boolean('mostrar_contato').notNullable();
        table.integer('id_categoria').unsigned();
        table.foreign('id_categoria').references('id_categoria').inTable('tab_categoria');
    });
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_produto');
}