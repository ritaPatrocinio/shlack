import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  /**
   * @type {AuthService}
   */
  @service auth;

  get isDisabled() {
    return !this.userId;
  }

  /**
   * @param {Event & {target: HTMLSelectElement}} evt
   */
  @action
  onSelectChange(evt) {
    this.userId = evt.target.value;
  }

  /**
   *
   * @param {Event & {target: HTMLElement}} evt
   */

  @action
  onLoginFormSubmit(evt) {
    const { target } = evt;
    const val = target.querySelector('select').value;
    evt.preventDefault();

    this.auth.loginWithUserId(val);
  }
}
