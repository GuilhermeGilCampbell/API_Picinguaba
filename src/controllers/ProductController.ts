import {Request,Response} from 'express'
import knex from '../database/connection';

export default {
    async create(req: Request, res: Response) {
        const {nome,id_categoria,descricao,preco,destaque,longitude,latitude,mostrar_mapa,mostrar_contato,id_contato} = req.body;
        const data = {nome,id_categoria,descricao,preco,destaque,longitude,latitude,mostrar_mapa,mostrar_contato,id_contato};

        await knex('tab_produto').insert(data);

        return res.status(201).json({data:data});
    }

    // async list(req: Request, res: Response) {
    //     const result = await knex('tab_produto').orderBy('id');
    //     return res.status(200).json({data:result});
    // },

    // async find(req: Request, res: Response) {
    //     const { id } = req.params;
    //     const result = await knex('tab_produto').where({id});
    //     return res.status(200).json({result});
    // },

    // async update(req: Request, res: Response) {
    //     const {id} = req.params;
    //     const {nome, descricao} = req.body;
    //     const data = {nome,descricao};

    //     await knex('tab_produto').update(data).where({id });
    //     const cat = await knex ('tab_produto').where({id});

    //     return res.status(200).json({data:cat});
    // },

    // async delete(req: Request, res: Response) {
    //     const {id} = req.params;
    //     await knex ('tab_produto').delete().where({id})
    //     return res.status(200).json({message: 'Produto excluido com sucesso'});
    // }
}