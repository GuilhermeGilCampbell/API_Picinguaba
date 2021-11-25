import {Request,Response} from 'express'

export default {
    async create(req: Request, res: Response) {
        const {nome,descricao} = req.body;
        let data = {nome,descricao};
    }
}