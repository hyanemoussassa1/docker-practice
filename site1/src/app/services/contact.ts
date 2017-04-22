class Address {
  firstline: string;
  secondline: string;
  city: string;
  postcode: string;
  country: string;
}

class PhoneNumber {
  private _countrycode: number;
  private _phonenumber: number;

  constructor(countrycode: number, phonenumber: number) {
    this._countrycode = countrycode;
    this._phonenumber = phonenumber;
  }
}

export class ContactMessage {
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _subject: string;
  private _message: string;

  constructor(firstname: string, lastname: string, email: string) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
  }

  set subject(subject: string) {
    this._subject = subject;
  }

  get subject(): string {
    return this._subject;
  }

  set message(message: string) {
    this._message = message;
  }

  get message(): string {
    return this._message;
  }
}

export class ContactService {
  retrieveOurContactDetails() {
    let address = new Address();
    address.firstline = '133 service road';
    address.secondline = 'Bletchley';
    address.city = 'Milton Keynes';
    address.postcode = 'MK2 3QN';
    address.country = 'United Kingdom';
    let phone = new PhoneNumber(44, 7938561839);
    return {
      address: address,
      contact: [phone],
      emailaddress: 'cudjoe@gmail.com'
    };
  }
  sendMessage(message: ContactMessage) {
    
  }
}
