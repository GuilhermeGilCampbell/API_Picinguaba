import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return await knex.schema.createTable('tab_produto', (table) => {
        table.increments('id',{primaryKey: true}).unique();
        table.integer('id_categoria').unsigned();
        table.foreign('id_categoria').references('id').inTable('tab_categoria');
        table.specificType('nome','VARCHAR(25)').notNullable();
        table.text('descricao').notNullable();
        table.double('preco');
        table.boolean('destaque').notNullable();
        table.double('longitude');
        table.double('latitude');
        table.boolean('mostrar_mapa').notNullable();
        table.integer('id_contato').unsigned();
        table.foreign('id_contato').references('id').inTable('tab_contato');
        table.boolean('mostrar_contato').notNullable();   
    });

    
}

export async function down(knex: Knex): Promise<void> {
    return await knex.schema.dropTable('tab_produto');
}