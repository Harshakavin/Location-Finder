
import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Foodmain} from "../Chat/chat";
import {GetdirectionsPage} from "../getdirections/getdirections";


@Component({
  selector: 'page-navigator',
  templateUrl: 'navigator.html'
})
export class navigator {

  onusers:any;
  offusers:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
    this.onusers = [
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: 'Hello from the other side.',
        name: 'Gregory',
        time: '28-Jun-2016 21:53'
      },
      {
        img: 'build/img/hugh.png',
        position: 'right',
        content: 'Hi! How are?',
        name: 'Sam',
        time: '28-Jun-2016 21:55'
      },
      {
        img: 'build/img/hugh.png',
        position: 'left',
        content: "This is some really long test that I'm writing here. Let's see how it wraps.",
        name: 'Waruna',
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
  navigate(Cname:any) {



    var locations = [
      ['Naditha', 6.913253, 79.974825, 4],
      ['Me', 6.9148286, 79.97273, 5],
      ['Gregory', 6.904327, 79.967208, 3],
      ['Sam', 6.900003, 79.957595, 2],
      ['Waruna', 6.909312, 79.970641, 1]
    ];

    var i;

    for (i = 0; i < locations.length; i++) {
      if(locations[i][0] == Cname){
        console.log(locations[i][1]+' '+locations[i][2]+' '+Cname);
        this.navCtrl.push(GetdirectionsPage, {
          lat: locations[i][1], lng: locations[i][2],type: 'any',name:Cname,
        });
        break;
      }

    }
    if(Cname == 'Naditha') {
      var Message: string = "You are try to navigate to naditha's last location. because he is offline ";
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
    // this.navCtrl.push(Foodmain, {
    //   name: Cname,
    // });
  }

}
