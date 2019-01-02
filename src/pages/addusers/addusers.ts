import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-addusers',
  templateUrl: 'addusers.html',
})
export class addusers {

  onusers:any;
  offusers:any;
  myInput:string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    this.onusers = [
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: 'Hello from the other side.',
        name: 'Nisala',
        time: '28-Jun-2016 21:53'
      },
      {
        img: 'build/img/hugh.png',
        position: 'right',
        content: 'Hi! How are?',
        name: 'Nimantha',
        time: '28-Jun-2016 21:55'
      },
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: "This is some really long test that I'm writing here. Let's see how it wraps.",
        name: 'Dinusha',
        time: '28-Jun-2016 21:57'
      }
    ];
    this.offusers= [
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: 'Hello from the other side.',
        name: 'Naditha',
        time: '28-Jun-2016 21:53'
      }
    ];

}
  onInput(){


  }
  sendreq(){

    var Message: string = "Do you want do send a Request? ";
    let alert = this.alertCtrl.create({
      message: Message,
      buttons: [
        {
          text: "Ok",
          role: 'cancel'

        },
        {
          text: "Close",
          role: 'cancel'

        }
      ]
    });
    alert.present();
  }
}
