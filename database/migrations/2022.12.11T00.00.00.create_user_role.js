"use strict";

async function up(knex) {
  await knex("up_roles").insert([
    {
      name: "Freelancer",
      description: "Role of user who is freelancer",
      type: "freelancer",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}

module.exports = { up };
