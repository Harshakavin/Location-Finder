export class Users {
  private _email:string;
  private _phone:string;
  private _password:string;
  private _name:string;
  constructor(email:string,phone:string,password:string,name:string){

    this._email =email;
    this._phone =phone;
    this._password=password;
    this._name = name;

  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get password(): string {
    return this._password;
  }
}
