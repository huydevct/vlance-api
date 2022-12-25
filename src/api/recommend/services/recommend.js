'use strict';

/**
 * recommend service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommend.recommend');
