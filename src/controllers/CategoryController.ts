import {Request,Response} from 'express'

export default {
    async create(req: Request, res: Response) {
        const {categoria,descricao} = req.body;
        const id = 1;
        const data = {id,categoria,descricao};
        return res.status(201).json({data:data});
    },

    async list(req: Request, res: Response) {
        const result = [{id:999999}];
        return res.status(200).json({data:result});
    }
}