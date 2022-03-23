import * as strapi from '$lib/strapi';

/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
    // `params.id` comes from [id].js
    const res = await strapi.get(`albums`);
    const data = await res.json()
    return { body: data };
};