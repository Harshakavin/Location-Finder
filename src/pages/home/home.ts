import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GetdirectionsPage} from '../getdirections/getdirections';
import { myFriends} from '../myFriends/myFriends';
import {navigator } from '../../pages/navigator/navigator';
import {Login} from "../login/login";
// import {ChatBubble} from "../chatBubble/chatBubble";
import { AuthData } from '../../providers/auth-data';
// import {Foodmain } from '../Chat/chat';
import {addusers } from '../../pages/addusers/addusers';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})


export class HomePage {

  From:any;
  To:any;
  getdirectionsPage = GetdirectionsPage;
  // placestovisitPage=PlacestovisitPage;
  slides=[];
  pages=[];
  name:String = "None";

  constructor(public navCtrl: NavController,public authData : AuthData ) {
    this.name =  this.authData.getUser();
this.slides = [
  {image:"http://www.tripstation.com/uploads/1/4/5/7/14579030/5035667_orig.jpg" },
{image:"http://www.travelfootprint.lk/wp-content/uploads/2014/08/travel-footprint-kandy-ulpangeya.jpg"},
{image:"http://tourismattraction.com/wp-content/uploads/2013/12/Sigiriya+Rock+Fortress+in+Srilanka+2.jpg"},
{image:"https://s-media-cache-ak0.pinimg.com/originals/f8/9c/7e/f89c7edb16c1580aa12326ba7428f07e.jpg"},
{image:"https://c2.staticflickr.com/8/7488/15874794101_7248358e47_b.jpg"},
{image:"https://www.undiscovered.guide/images/sri-lanka/ella/ravana-falls-2.708x.85.jpg"},

]



};

/*
 calculateAndDisplayRoute() {

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {

          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });

          directionsDisplay.setMap(map);
          directionsService.route({
          origin:this.From,
          destination:this.To,
          travelMode: 'DRIVING'
        }, function(response, status) {

          if (status === 'OK') {
            directionsDisplay.setDirections(response);

          }

          else{

            window.alert('Directions request failed due to ' + status);
          }

        });
      }

*/
addfriends(){
    this.navCtrl.push(addusers);
  }


logout(){

  this.navCtrl.setRoot(Login);
}
gotoGetDirections() {
  this.navCtrl.push(GetdirectionsPage, {
    lat: 6.9148286, lng: 79.97273, type: 'mark1',name: 'Harsha',
  });

  this.navCtrl.push(GetdirectionsPage, {
    type: 'all'
  });
}

  goToChat(){
    this.navCtrl.push(myFriends);
  }
  goToNavigate(){
    this.navCtrl.push(navigator);
  }


}


