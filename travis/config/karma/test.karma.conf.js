/*jshint node: true*/
'use strict';

const shared = require('../../../shared/karma/shared.karma.conf');

/**
 * Travis-CI platform overrides.
 * @name getConfig
 * @param {Object} config
 */
function getConfig(config) {
  const env = {
    BROWSER_STACK_USERNAME: process.env.BROWSER_STACK_USERNAME,
    BROWSER_STACK_ACCESS_KEY: process.env.BROWSER_STACK_ACCESS_KEY,
    BROWSER_STACK_BUILD_ID: process.env.TRAVIS_BUILD_NUMBER,
    BROWSER_STACK_PROJECT: process.env.BROWSER_STACK_PROJECT
  };

  console.log('ENV:', env);

  shared(config, env);
}

module.exports = getConfig;
