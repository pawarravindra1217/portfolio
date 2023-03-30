import { Component, OnInit } from '@angular/core';
import { Education } from './models/education-modal';
import { Experience } from './models/experience-modal';
import { PersonalInfoItemInterface } from './models/personal-info-modal';
import { SkillsInfoInterface } from './models/skills-modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  personalInfo: PersonalInfoItemInterface[] = [
    {
      id:1,
      itemName:'Birthday',
      itemValue: '12th June 1994'
    },
    {
      id:2,
      itemName:'Age',
      itemValue: '28'
    },
    {
      id:3,
      itemName:'Website',
      itemValue: 'www.ravindrapawar.com'
    },
    {
      id:4,
      itemName:'Email',
      itemValue: 'pawarravindra1217@gmail.com'
    },
    {
      id:5,
      itemName:'Degree',
      itemValue: 'Computer Engineering'
    },
    {
      id:6,
      itemName:'Phone',
      itemValue: '+91 9923 808 630'
    },
    {
      id:7,
      itemName:'City',
      itemValue: 'Pune'
    }
  ]

  skillsInfo: SkillsInfoInterface[] = [
    {
      id:1,
      skillName:'Angular',
      percentage: '80%',
      size:80
    },
    {
      id:2,
      skillName:'.Net Core',
      percentage: '85%',
      size:85
    },
    {
      id:3,
      skillName:'HTML',
      percentage: '80%',
      size:80
    },
    {
      id:4,
      skillName:'CSS',
      percentage: '60%',
      size: 60
    },
    {
      id:5,
      skillName:'C#',
      percentage: '90%',
      size: 90
    
    },
    {
      id:6,
      skillName:'Javascript',
      percentage: '80%',
      size: 80
    
    }
  ]

  education: Education[] = [
    {
      id: 1,
      year:'2014 - 2018',
      title:'Computer Engineering',
      description:["Bachelor of Engineering","JSPM'S Rajarshi Shahhu college of engineering"]
    },
    {
      id: 2,
      year:'2011 - 2014',
      title:'Diploma In Computer Engineering',
      description:["Y.B. Patil Polytechnoc Akurdi"]
    },
    {
      id: 3,
      year:'2009 - 2010',
      title:'S.S.C',
      description:["Shri Jain Fattecand Vidyalay Chinchwad 411 033"]
    }
  ]

  experience: Experience[] = [
    {
      id: 1,
      year:'18th Oct 2018 - 21st July 2022 - (Full Stack Developer)',
      title:'Technogrowth Software Solutions Pvt ltd',
      description:[
        "One of the core member of product development team to start form scratch. I am responsible in design and development of various modules or components in we application",
        "Worked as a Full Stack Developer and designed the UI/UX for the projcet seeking different approaches to have a wonderfull experience to the user",
        "Got exposure to 5+ frontend and backend data processing applications, client interaction, understanding client needs and supporting them",
        "Implemented CI/CD pipeline for the deployment of the project"]
    },
    {
      id: 2,
      year:'22nd July 2022 - Present - (Full Stack Developer)',
      title:'Bito',
      description:[
        "Worked on creating developer collboration tool which will help developers to work together remotelty.",
        "Integrated ChatGPT API's to generate code, command syntax, test cases, explain code, check security, explain concepts",
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  scrollToContact() {
    const a = document.getElementById('Contact1234') as HTMLElement;
    a.scrollIntoView();
  }

}
