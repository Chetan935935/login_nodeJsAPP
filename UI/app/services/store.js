import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class StoreService extends Service {
  @tracked url = 'http://localhost:3000';

//   to create a post request for users data
  @action requestGet(path, payload) {
    return fetch(`${this.url}/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  }
}
