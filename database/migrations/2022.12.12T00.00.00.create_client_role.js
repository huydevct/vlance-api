"use strict";

async function up(knex) {
  await knex("up_roles").insert([
    {
      name: "Client",
      description: "Role of user who is client",
      type: "client",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}

module.exports = { up };
