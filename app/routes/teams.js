import Route from '@ember/routing/route';
import AuthService from 'shlack/services/auth';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

export default class TeamsRoute extends Route {
  /**
   * @type {AuthService}
   */
  @service auth;
  async beforeModel(transition) {
    super.beforeModel(transition);

    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }

  async model() {
    const response = await fetch('/api/teams');
    return await response.json();
  }
}
