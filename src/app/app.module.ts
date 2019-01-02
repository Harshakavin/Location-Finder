
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { myFriends} from '../pages/myFriends/myFriends';
import { Login} from '../pages/login/login';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { Signup } from '../pages/signup/signup';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import {addusers } from '../pages/addusers/addusers';
import {navigator } from '../pages/navigator/navigator';
import {Foodmain } from '../pages/Chat/chat';
import { AuthData } from '../providers/auth-data';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {GetdirectionsPage } from '../pages/getdirections/getdirections';
// import{ ChatBubble } from '../pages/chatBubble/ChatBubble';

/*export const firebaseConfig = {
 apiKey: "AIzaSyAyDNjaaShMHzNQ5-dgcsdhf_nWgp-tMVg",
  authDomain: "location-b4e5f.firebaseapp.com",
  databaseURL: "https://location-b4e5f.firebaseio.com",
 projectId: "location-b4e5f",
 storageBucket: "location-b4e5f.appspot.com",
 messagingSenderId: "1044450271538"
}*/
export const firebaseConfig= {
 apiKey: "AIzaSyDb_yqC7PJCCrRtIA4Fyj9ac34eKy8R9Gs",
    authDomain: "exjp-528d4.firebaseapp.com",
    databaseURL: "https://exjp-528d4.firebaseio.com",
    projectId: "exjp-528d4",
    storageBucket: "exjp-528d4.appspot.com",
    messagingSenderId: "39688149053"
};
// const myFirebaseAuthConfig = {
//   provider: AuthProviders.Password,
//   method: AuthMethods.Password
// }


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    myFriends,
    Login,
    addusers,
    navigator,
    Foodmain,
    ResetPassword,
    Signup,
    GetdirectionsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig ),
  ],


  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    myFriends,
    Login,
    addusers,
    navigator,
    Foodmain,
    ResetPassword,
    Signup,
    // ChatBubble,
    GetdirectionsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },

    AuthData
  ]
})
export class AppModule { }

