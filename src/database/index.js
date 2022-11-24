const { Client } = require("pg");

const client = new Client({
    host: "",
    port: 5432,
    user: "",
    password: "",
    database: "",
});

client.connect();

exports.query = async (query, values) => {
    const {rows} = await client.query(query, values);
    return rows;
};

