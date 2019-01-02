import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Content, NavParams} from 'ionic-angular';
import {GetdirectionsPage} from '../getdirections/getdirections';
declare var google;

@Component({
  selector: 'page-foodmain',
  templateUrl: 'chat.html',
})
export class Foodmain {

  // @ViewChild(Content) content: Content;
  msgList:any= [];
  input:string;
  selection:boolean;
  Chatname:string;
  loginuser: string;
  lat :number;
  long:number;

  constructor( public navParams: NavParams,public navCtrl: NavController) {
    this.Chatname = navParams.get('name');
    if(this.Chatname == "BestFrD"){
      this.selection = false;
    }else{
      this.selection = true;
    }
    this.loginuser =window.sessionStorage.getItem('FFuser');
    this.msgList = [
      {
        content: 'Hello from the other side.',
        senderName: 'Naditha',
        to : 'harsha',
        time: '28-Jun-2016 21:53',
        lat: 6.904157,
        lng: 79.954011
      },
      {

        content: 'Hi! How are?',
        senderName: 'Gregory',
        to : 'harsha',
        lat: 6.904327,
        lng: 79.967208,
        time: '28-Jun-2016 21:55'
      },
      {
        content: "This is some really long test that I'm writing here. Let's see how it wraps.",
        senderName: 'Sam',
        to : 'harsha',
        lat: 6.900003,
        lng: 79.957595,
        time: '28-Jun-2016 21:57'
      },
      {
        content: "Ohh really?",
        senderName: 'Waruna',
        to : 'harsha',
        lat: 6.909312,
        lng: 79.970641,
        time: '30-Jun-2016 21:57'
      },
      {
        content: "hi guys?",
        senderName: 'Waruna',
        to : 'BestFrD',
        time: '30-Jun-2016 21:57'
      },
      {
        content: "hi guys?",
        senderName: 'Waruna',
        to : 'BestFrD',
        time: '30-Jun-2016 21:57'
      },
      {
        content: "hi :)",
        senderName: 'Gregory',
        to : 'BestFrD',
        time: '30-Jun-2016 21:57'
      },
      {
        content: "hey!",
        senderName: 'Naditha',
        to : 'BestFrD',
        time: '30-Jun-2016 21:57'
      }


    ];
    this.setlocation();
  }

  inputMsg(){
    console.log('msg: '+this.input);
    if(this.input != null){
    let date: string = new Date().toISOString();
    let msg:any = {
      content: this.input,
      senderName: window.sessionStorage.getItem('FFuser'),
      to: this.Chatname,
      time: date};
      console.log('msg: '+msg);
    this.msgList.push(msg);
      this.ionViewDidEnter();
  }}

setlocation(){
  try {
    console.log(this.msgList);
    let keepGoing:boolean = true;
    this.msgList.forEach((x: any) => {
      // console.log(x);
      if(keepGoing) {
      console.log(x.senderName+" "+this.Chatname);
      if(x.senderName = this.Chatname){
        console.log(x.lat+' '+  x.lng );
        this.lat = x.lat;
        this.long = x.lng;
        console.log(this.lat+' '+  this.long );
        keepGoing=false;
      }
      };
    });
    console.log('lat long saved');

  }catch (err){
    console.log(err);

  }

}

  ionViewDidLoad(){
    // let dimensions = this.content.getContentDimensions();
    // this.content.scrollTo(0, 0, 10);
  }
  ionViewDidEnter() {
    // let dimensions = this.content.getContentDimensions();
    // this.content.scrollTo(0, dimensions.contentHeight-100, 100);
  }

  gotoGetDirections() {
    if(this.Chatname != 'BestFrD'){
    this.navCtrl.push(GetdirectionsPage, {
      lat: this.lat, lng: this.long,type: 'mark1',name:this.Chatname,
    });
  }else{
      this.navCtrl.push(GetdirectionsPage, {
        type: 'all'
      });
    }
  }
}
