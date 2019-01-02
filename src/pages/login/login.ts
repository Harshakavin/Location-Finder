import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';


import {
  LoadingController,
  AlertController
} from 'ionic-angular';
import { AuthData } from '../../providers/auth-data';
import { HomePage } from '../home/home';
import { Signup } from '../signup/signup';
import { ResetPassword } from '../reset-password/reset-password';
import { EmailValidator } from '../../validators/email';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
loginForm: any;
loading: any;
  constructor(public navCtrl: NavController, public authData: AuthData, public navParams: NavParams,public formBuilder: FormBuilder,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
// new  code
        window.sessionStorage.removeItem('FFuser');
       this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }
 loginUser(){
      // this.navCtrl.setRoot(HomePage);
      if (!this.loginForm.valid){
        var Message: string = "Username or password invalid.";
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
        console.log(this.loginForm.value);
      } else {
        // this.navCtrl.setRoot(HomePage);
        // if(this.loginForm.value.email == 'admin' && this.loginForm.value.password == 'pass'){
        //   this.navCtrl.setRoot(HomePage);
        // }
        console.log(this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password));
        if(this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)){
          this.navCtrl.setRoot(HomePage);
        }else{

          var Message: string = "Username or password in not valid.";
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
        }
        // .then( authData => {
        //   this.navCtrl.setRoot(HomePage);
        // }, error => {
        //   this.loading.dismiss().then( () => {
        //     let alert = this.alertCtrl.create({
        //       message: error.message,
        //       buttons: [
        //         {
        //           text: "Ok",
        //           role: 'cancel'
        //         }
        //       ]
        //     });
        //     alert.present();
        //   });
        // });

        // this.loading = this.loadingCtrl.create({
        //   dismissOnPageChange: true,
        // });
        // this.loading.present();
      }
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPassword);
  }

  createAccount(){
    this.navCtrl.push(Signup);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
