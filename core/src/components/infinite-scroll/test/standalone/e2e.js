'use strict';

const { By, until } = require('selenium-webdriver');
const { register, Page, platforms } = require('../../../../../scripts/e2e');

class E2ETestPage extends Page {
  constructor(driver, platform) {
    super(driver, `http://localhost:3333/src/components/infinite-scroll/test/standalone?ionicplatform=${platform}`);
  }
}

platforms.forEach(platform => {
  describe('infinite-scroll/standalone', () => {
    register('should init', driver => {
      const page = new E2ETestPage(driver, platform);
      return page.navigate("#content");
    });
  });
});
