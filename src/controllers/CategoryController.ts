import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const categoria = req.body;
      await knex("tab_categoria").insert(categoria);
      return res.status(201).json({message: "Categoria cadastrada com sucesso"});
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const categorias = await knex("tab_categoria").orderBy("id_categoria");
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const categoria = await knex("tab_categoria").where({ id_categoria: id});
      return res.status(200).json(categoria);
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id, nome } = req.body;
      const data = { nome };
      await knex("tab_categoria").update(data).where({ id_categoria: id });
      return res.status(200).json({ message: "Categoria atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await knex("tab_categoria").delete().where({ id });
      return res.status(200).json({ message: "Categoria excluida com sucesso" });
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
