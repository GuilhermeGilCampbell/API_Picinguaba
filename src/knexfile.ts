import path from 'path';

export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'us-cdbr-east-05.cleardb.net',
            user: 'b3babbb07c6360',
            password: '6ea10041',
            database: 'heroku_1cdcfa94b61336d'
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