import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class Login extends Component {
  //Import services
  @service store;

  // tracked variables
  @tracked userName;
  @tracked password;
  @tracked path = 'api/login/isUserPresent';

  // method to check if user is present in database or not
  @action
  async checkIfUserPresent() {
    await this.store
      .requestGet(this.path, this.preparePayload())
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'fail') {
          alert(data.description);
        } else {
          alert(data.description);
        }
      });
  }

  //for getting the data from user input field
  @action
  updateUserName(event) {
    this.userName = event.target.value;
    console.log(this.userName);
  }

  //for gettig password data from input filed
  @action
  updatePassword(event) {
    this.password = event.target.value;
    console.log(this.password);
  }

  @action
  preparePayload() {
    return {
      userName: this.userName,
      password: this.password,
    };
  }
}
