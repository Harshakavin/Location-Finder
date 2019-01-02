import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Rating} from '../pages/rating/rating';
import { Login} from '../pages/login/login';
import { AuthData } from '../providers/auth-data';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFire } from 'angularfire2';


// import{Nwkandy } from '../pages/nwkandy/nwkandy';
// import{Details } from '../pages/details/details';
// import{Nwjaffna } from '../pages/nwjaffna/nwjaffna';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =HomePage;
  menu:boolean =false;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public af: AngularFire,public statusBar: StatusBar, public splashScreen: SplashScreen,public authData: AuthData) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Login', component:Login },
      { title: 'further improvement to visit', component:Login}


    ];
//     const authObserver = af.auth.subscribe( user => {
//       this.rootPage = Login;
//
//     if (user) {
//     this.rootPage = HomePage;
//     authObserver.unsubscribe();
//     } else {
//
//     authObserver.unsubscribe();
//    }
// });
    if(this.authData.getUser() != null){
      this.menu = true;
      this.rootPage = HomePage;
    }else{
      this.rootPage = Login;
      this.menu = false;
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
