import {Request,Response} from 'express'
import knex from '../database/connection';

export default {
    async create(req: Request, res: Response) {
        const {nome,descricao} = req.body;
        const data = {nome,descricao};

        await knex('tab_categoria').insert(data);

        return res.status(201).json({data:data});
    },

    async list(req: Request, res: Response) {
        const result = await knex('tab_categoria').orderBy('id');
        return res.status(200).json({data:result});
    },

    async find(req: Request, res: Response) {
        const { id } = req.params;
        const result = await knex('tab_categoria').where({id});
        return res.status(200).json({result});
    },

    async update(req: Request, res: Response) {
        const {id} = req.params;
        const {nome, descricao} = req.body;
        const data = {nome,descricao};

        await knex('tab_categoria').update(data).where({id });
        const cat = await knex ('tab_categoria').where({id});

        return res.status(200).json({data:cat});
    },

    async delete(req: Request, res: Response) {
        const {id} = req.params;
        await knex ('tab_categoria').delete().where({id})
        return res.status(200).json({message: 'Categoria excluida com sucesso'});
    }
}