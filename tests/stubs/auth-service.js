import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

import Router from '@ember/routing/router';

export default class MockAuthService extends Service {
  currentUserId = null;

  /**
   * @type {Router}
   */
  @service router;

  /**
   * @param {string} userId
   */
  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.currentUserId = null;
    this.router.transitionTo('login');
  }
}
