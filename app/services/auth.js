import Service from '@ember/service';

import { inject as service } from '@ember/service';

import Router from '@ember/routing/router';

import { action } from '@ember/object';
import CookiesService from 'ember-cookies/services/cookies';

const AUTH_KEY = 'shlack-userid';

export default class AuthService extends Service {
  /**
   * @type {Router}
   */
  @service router;

  /**
   * @type {CookiesService}
   */
  @service cookies;

  get currentUserId() {
    return this.cookies.read(AUTH_KEY);
    // window.localStorage.getItem(AUTH_KEY);
  }

  /**
   * @param {string} userId
   */
  loginWithUserId(userId) {
    this.cookies.write(AUTH_KEY, userId);
    // window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.cookies.write(AUTH_KEY, null);
    // window.localStorage.removeItem(AUTH_KEY);
    this.router.transitionTo('login');
  }
}
