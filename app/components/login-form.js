import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId(val) {
    console.log(
      '🚀 ~ file: login-form.js:13 ~ LoginFormComponent ~ onLoginFormSubmit ~ val:',
      val
    );
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

    this.loginAsUserWithId(val);
  }
}
