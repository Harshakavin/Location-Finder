// import { Injectable } from '@angular/core';
// //import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
// import { AngularFire } from 'angularfire2';
// import firebase from 'firebase';
import { Users } from "../../src/model/Users";


/*
  Generated class for the AuthData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class AuthData {

  //constructor(public http: Http) {
   // console.log('Hello AuthData Provider');

//}
  private Userlist:Users[] = [];

  getUser(): String {
    return window.sessionStorage.getItem('FFuser');
  }

  loginUser(newEmail: string, newPassword: string):boolean {
    let userFound:boolean =false;
    try {
      console.log(this.Userlist);
      this.Userlist.forEach((x: any) => {
          // console.log(x);
          console.log(x.email +' '+  x.password );
          if(x._email == newEmail && x._password == newPassword){
            window.sessionStorage.setItem('FFuser',x._name);
            console.log('sesson saved '+x._name);
            userFound = true;
          }
      });
      console.log(userFound);

    }catch (err){
     console.log(err);
      return false;
    }

    if( userFound = true){
      return true;
    }else {
      return false;
    }
  }

resetPassword(email: string){


}


logoutUser() {
  window.sessionStorage.removeItem('FFuser');
}


signupUser(newEmail: string,phone:string, newPassword: string,newName :string):boolean {

    try {
      let user = new Users(newEmail,phone,newPassword,newName);
      console.log(this.Userlist)
      this.Userlist.push(user);
      // this.Userlis;
      // this.Userlist.forEach(function(e){console.log(e)});
    }catch (ex){
      console.log(ex +"exception");
    }
    //
  // window.sessionStorage.setItem('FFuser',newEmail);
  return true;
  }



}


