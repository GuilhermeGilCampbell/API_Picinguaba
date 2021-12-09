import {Request,Response} from 'express'
import knex from '../database/connection';

export default {
    async create(req: Request, res: Response) {
        const {img} = req.body;
        const data = {img};

        await knex('tab_imagem').insert(data);

        return res.status(201).json({data:data});
    },

    async load(req: Request, res: Response) {
        const {id} = req.params;
        const img = await knex('img').where({id:id});
        
        if(img) {
            return res.end(img);
        } else {
            return res.end('No img found')
        }

    }
}

