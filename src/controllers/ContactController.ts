import { Request, Response } from "express";
import knex from "@/database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const contato = req.body;
      await knex("tab_contato").insert(contato);
      return res.status(201).json({message: "Contato cadastrado com sucesso"});
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const contatos = await knex("tab_contato").orderBy("id");
      return res.status(200).json({data: contatos});
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const contato = await knex("tab_contato").where({ id });
      return res.status(200).json({data: contato});
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
      await knex("tab_contato").update(data).where({ id_contato: id });
      return res.status(200).json({ message: "Contato atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await knex("tab_contato").delete().where({ id });
      return res.status(200).json({ message: "Contato excluido com sucesso" });
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
