import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import '../../../assets/js/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = ""
  constructor(private httpClient: HttpClient) { }

  sendEmail(body: any) {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'pawarravindra1217@gmail.com',
      Password : '40536DCA6984DAEAD6478DBE8C21C5B26A2100CE0AC10B3DA8CCC1848BC2D56752DAD16E7E51B800542C96B846EF0AA8',
      To : 'ravindra.pawar@bito.co',
      From : `pawarravindra1217@gmail.com`,
      Subject : body.subject,
      Body : `Name: ${body.name}
              Email: ${body.email}
              Subject: ${body.subject}
              Message: ${body.message}`
      }).then( (message: string) => {alert(message);} );
  }
}
