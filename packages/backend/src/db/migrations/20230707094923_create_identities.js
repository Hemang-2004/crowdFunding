export async function up(knex) {
  return knex.schema.createTable('identities', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('user_id').references('id').inTable('users');
    table.string('remote_id').notNullable();
    table.string('provider_id').notNullable();
    table.string('provider_type').notNullable();

    table.timestamps(true, true);
  });
}

export async function down(knex) {
  return knex.schema.dropTable('identities');
}
