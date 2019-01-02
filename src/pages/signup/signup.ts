import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {  LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { EmailValidator } from '../../validators/email';
// import { HomePage } from '../home/home';
import {Login} from "../login/login";
/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  public signupForm;
  loading;

  constructor(public nav: NavController, public authData: AuthData,
              public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

    this.signupForm = formBuilder.group({
      phone: ['', Validators.compose([Validators.maxLength(10), Validators.minLength(10), Validators.required])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      name :['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }


  signupUser() {
    console.log(this.signupForm.value + "values");
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value + "values");
    } else {
      console.log("users logged");
      if (this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.phone, this.signupForm.value.password,this.signupForm.value.name)) {
        console.log("users logged");

        var Message: string = "Your account has been created.";
        let alert = this.alertCtrl.create({
          message: Message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
        this.nav.setRoot(Login);
      } else {
        var errorMessage: string = "error";
        let alert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      }
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();

    }

  }

}
