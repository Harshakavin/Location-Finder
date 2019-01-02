import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";

declare var google;

@Component({
  selector: 'page-getdirections',
  templateUrl: 'getdirections.html',
})
export class GetdirectionsPage {

  @ViewChild('map') mapElement: ElementRef;
  map:any;

From:any;
  To:any;
  parameter1: 'a';
  parameter2: any;
  all :boolean= false;
  uname:string;
  type:string;

  currentLocation:any;
  // map: GoogleMap;
  // private googleMaps: GoogleMaps
  locations:any= [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locations = [
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
      }
   ];

    console.log(navParams.get('type'));
    this.type = navParams.get('type');
    if(this.type == 'mark1'){
      this.parameter1 = navParams.get('lat');
      this.parameter2 = navParams.get('lng');
      this.uname = navParams.get('name');
      this.all =false;
      // this.markLotion();

    }else if(navParams.get('type') == 'all'){
      // this.addMarkall();


    }else{
        this.parameter1 = navParams.get('lat');
        this.parameter2 = navParams.get('lng');
        this.all =false;
        // this.navigate()
    }
    // this.map =
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetdirectionsPage');
    console.log("para1 : " + this.parameter1);
    console.log("para2 : " + this.parameter2);

    // this.calculateAndDisplayRoute();
    // this.navigate();
    // this.addMarkall();
    if(this.type == 'mark1'){
      this.all =false;
      this.markLotion();

    }else if(this.type == 'all'){
      this.addMarkall();
    }else{
      this.all =false;
      this.navigate()
    }
  }

  markLotion() {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    console.log("direc service : " + directionsService);
    console.log("direc display : " + directionsDisplay);
    this.map = "A";
    console.log("para1 : " + this.parameter1);
    console.log("para2 : " + this.parameter2);

    let latLang = new google.maps.LatLng(this.parameter1, this.parameter2);
    console.log("lpo : " + latLang);
    let mapOption = {
      center: latLang,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOption);
    console.log("Map : " + this.map);

    // let latLng = new google.maps.LatLng(this.parameter1, this.parameter2);
    //
    // this.currentLocation = latLng;
    //
    // let mapOptions = {
    //   center: latLng,
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    //
    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.addMarker();

  }


  addMarker(){

   let marker = new google.maps.Marker({
     map: this.map,
     animation: "",
     icon: {
       url: '../../assets/img/m1.png',
     },
     position: this.currentLocation
     });

   let content = this.uname;
   let infoWindow = new google.maps.InfoWindow({content: content});
   infoWindow.open(this.map, marker);
 }


  addMarkall(){
    let latLng = new google.maps.LatLng(6.9148286, 79.97273);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var locations = [
      ['Naditha', 6.904157, 79.954011, 4],
      ['Me', 6.9148286, 79.97273, 5],
      ['Gregory', 6.904327, 79.967208, 3],
      ['Sam', 6.900003, 79.957595, 2],
      ['Waruna', 6.909312, 79.970641, 1]
    ];

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map
      });
      let content = locations[i][0];
      let infoWindow = new google.maps.InfoWindow({content: content});
      infoWindow.open(this.map, marker);

      // google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //   return function() {
      //     infowindow.setContent(locations[i][0]);
      //     infowindow.open(this.map, marker);
      //   }
      // })(marker, i));
    }

  }



addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({content: content});
    infoWindow.open(this.map, marker);

    google.maps.event.addListener(marker, 'click', () => {

    });
}


navigate(){
  let start = 'chicago, il';
  let end = 'chicago, il';
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
     });
  directionsDisplay.setMap(this.map);

    directionsService.route({
      origin: {lat: this.parameter1, lng: this.parameter2},
      destination: {lat:6.904157, lng:79.954011},
      travelMode: google.maps.TravelMode['DRIVING']
    }, (response, status) => {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }




 //
 // findTransit(){
 //   var request = {
 //  location: this.currentLocation,
 //    radius: '5000',
 //    types: ['train_station']
 //     };
 //  }



}





