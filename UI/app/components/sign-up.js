import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class SignUp extends Component {
  // import services
  @service store;

  // tracked variables
  @tracked userName;
  @tracked email;
  @tracked mobileNo;
  @tracked password;
  @tracked confirmedPass;

  @tracked path = 'api/signUp/AddData';

  // method for creating the record in database using post method
  @action
  async createUser() {
    if (this.password != this.confirmedPass) {
      alert('Cheak Password again');
      return;
    }
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

  // folowing methods are for accepting the data from input fileds
  @action
  updateUserName(event) {
    this.userName = event.target.value;
    console.log(this.userName);
  }
  @action
  updateEmail(event) {
    this.email = event.target.value;
    console.log(this.email);
  }
  @action
  updateMobileNo(event) {
    this.mobileNo = event.target.value;
    console.log(this.mobileNo);
  }
  @action
  updatePassword(event) {
    this.password = event.target.value;
    console.log(this.password);
  }
  @action
  updateConfirmedPass(event) {
    this.confirmedPass = event.target.value;
    console.log(this.confirmedPass);
  }

  @action
  preparePayload() {
    return {
      userName: this.userName,
      email: this.email,
      mobile: this.mobileNo,
      password: this.password,
    };
  }
}
