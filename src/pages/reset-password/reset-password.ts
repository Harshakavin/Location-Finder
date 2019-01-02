import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AlertController } from 'ionic-angular';

import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
//import { Login } from '../login/login';
import { EmailValidator } from '../../validators/email';
/**
 * Generated class for the ResetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPassword {
  public resetPasswordForm;
  constructor(public authData: AuthData, public nav: NavController,public formBuilder: FormBuilder,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    })
  }


 resetPassword(){
   var Message: string = "Reset Email has beeen send..";
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
    //
    // if (!this.resetPasswordForm.valid){
    //   console.log(this.resetPasswordForm.value);
    // } else {


      // this.authData.resetPassword(this.resetPasswordForm.value.email)
      // .then((user) => {
      //   let alert = this.alertCtrl.create({
      //     message: "We just sent you a reset link to your email",
      //     buttons: [
      //       {
      //         text: "Ok",
      //         role: 'cancel',
      //         handler: () => {
      //           this.nav.pop();
      //         }
      //       }
      //     ]
      //   });
      //   alert.present();
      // }, (error) => {
      //   var errorMessage: string = error.message;
      //   let errorAlert = this.alertCtrl.create({
      //     message: errorMessage,
      //     buttons: [
      //       {
      //         text: "Ok",
      //         role: 'cancel'
      //       }
      //     ]
      //   });
      //   errorAlert.present();
      // });

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPassword');
  }

}
