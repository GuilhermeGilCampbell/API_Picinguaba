import { Request, Response } from "express";
import knex from "@/database/connection";

export default {
  async create(req: Request, res: Response) {
    try {
      const imagem = req.body;
      await knex("tab_imagem").insert(imagem);
      return res.status(201).json({message: "Imagem cadastrada com sucesso"});
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async list(req: Request, res: Response) {
    try {
      const imagens = await knex("tab_imagem").orderBy("id");
      return res.status(200).json({data: imagens});
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async find(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const imagem = await knex("tab_imagem").where({ id });
      return res.status(200).json({data: imagem});
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
      await knex("tab_imagem").update(data).where({ id_imagem: id });
      return res.status(200).json({ message: "Imagem atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await knex("tab_imagem").delete().where({ id });
      return res.status(200).json({ message: "Imagem excluida com sucesso" });
    } catch (error) {
      return res.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
