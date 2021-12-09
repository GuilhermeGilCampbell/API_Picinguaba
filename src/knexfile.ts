import path from 'path';

export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_picinguaba'
        },

        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        },

        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
        },
    }
};