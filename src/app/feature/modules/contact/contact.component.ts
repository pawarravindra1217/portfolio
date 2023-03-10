import { Component, OnInit } from '@angular/core';
import { ContactInterface } from './modals/contact-interface';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactDetails:ContactInterface[] = [
    {
      id:1,
      keyName: 'Contact us on',
      keyValue: '+91 9923 808 630',
      icon: 'fa fa-phone'
    },
    {
      id:2,
      keyName: 'Email',
      keyValue: 'pawrravindra1217@gmail.com',
      icon: 'fa fa-envelope'
    },
    {
      id:3,
      keyName: 'Website',
      keyValue: 'www.ravindrapawar.com',
      icon: 'fa fa-globe'
    }
  ] 

  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      subject: new FormControl('',[Validators.required]),
      message: new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {
  }

  onSubmit(formValue: any) {
    this.emailService.sendEmail(formValue)
  }
}
