import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GetdirectionsPage} from "../getdirections/getdirections";
import {Foodmain } from '../Chat/chat';
@Component({
  selector: 'page-myFriend',
  templateUrl: 'myFriends.html',
})
export class myFriends {

  onusers:any;
  offusers:any;
  constructor(public navCtrl: NavController) {
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

  ChatWith(Cname:any) {
    this.navCtrl.push(Foodmain, {
      name: Cname,
    });
  }
}




