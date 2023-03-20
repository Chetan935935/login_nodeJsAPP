import EmberRouter from '@ember/routing/router';
import config from 'login-logout/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login', { path: '/' });
  this.route('login');
  this.route('sign-up');
});
