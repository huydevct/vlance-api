'use strict';

/**
 * recommend router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recommend.recommend');
