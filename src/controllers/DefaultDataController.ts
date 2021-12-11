import knex from "../database/connection";

export default {
    async insertCategories(data: any) {
        try {
            await knex("tab_categoria").insert(data);
            console.log('categorias adicionadas');
        } catch (error) {
            console.log(error);
        };
    },

    async insertProducts(data: any) {
        try {
            await knex("tab_produto").insert(data);
            console.log('produtos adicionados adicionadas');
        } catch (error) {
            console.log(error);
        };
    },

    async insertContacts(data: any) {
        try {
            await knex("tab_contato").insert(data);
            console.log('produtos adicionados adicionadas');
        } catch (error) {
            console.log(error);
        };
    },
}

