import { Component, OnInit } from '@angular/core';
import { ServicesInterface } from './modals/services-interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicesItems: ServicesInterface[] = [
    {
      id: 1,
      name:'Web Development',
      description:'Developed and maintained web applications using HTML, CSS, JavaScript, and Angular.' +
      'Collaborated with cross-functional teams to design and implement new features.'+
      'Implemented back-end functionality using .Net core and PostgreSQL and SQL server.'+
      'Optimized application performance and scalability.'+
      'Worked with APIs and integrated third-party services.',
      icon:'fa fa-globe'
    },
    {
      id: 2,
      name:'Mobile App Development',
      description:' Developed and maintained mobile applications using Ionic, Angular, and TypeScript.'+
      'Collaborated with cross-functional teams to design and implement new features.'+
      'Worked with RESTful APIs and integrated third-party services.'+
      'Implemented authentication and authorization features.'+
      'Worked with Firebase to store and retrieve data .',
      icon:'fa fa-mobile'
    },
    {
      id: 3,
      name:'Web Development Consultant',
      description:' Provided web development consulting services to clients in various industries'+
      'Worked with clients to identify business objectives and provide effective solutions' +
      'Designed and implemented web applications that meet client requirements' +
      'Provided technical support and resolved issues in a timely manner' +
      'Ensured the successful deployment of web applications',
      icon:'fa fa-handshake-o'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
