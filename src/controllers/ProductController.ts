import { Request, Response } from "express";
import knex from "@/database/connection";

export default {
  async create(request: Request, response: Response) {
    try {
      const data = request.body;
      await knex("tab_produto").insert(data);
      return response.status(201).json({ message: "Produto cadastrado com sucesso" });
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async list(request: Request, response: Response) {
    try {
      const produtos = await knex("tab_produto").join("tab_categoria", "tab_produto.id_categoria", "tab_categoria.id_categoria");
      return response.status(200).json({data: produtos});
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async find(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await knex("tab_produto").where({ id });
      return response.status(200).json({data: produto});
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async findCategory(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produtos = await knex("tab_produto").where({ id_categoria: id });
      return response.status(200).json({data: produtos});
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = request.body;
      await knex("tab_produto").update(data).where({ id });
      return response.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await knex("tab_produto").delete().where({ id });
      return response.status(200).json({ message: "Produto excluido com sucesso" });
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
