'use strict';

/**
 * recommend controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recommend.recommend');
