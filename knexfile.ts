import path from "path";

export default {
  deploy: {
    client: "mysql2",
    connection: {
      host: "us-cdbr-east-05.cleardb.net",
      user: "b8e0938feae94e",
      password: "006efc6a",
      database: "heroku_39a15e84547465d",
      port: 3306,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },

    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },

  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "root",
      database: "db_picinguaba",
      port: 3306,
    },

    migrations: {
      tableName: "knex_migrations",
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },

    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },
};
