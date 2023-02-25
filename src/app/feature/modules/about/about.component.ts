import { Component, OnInit } from '@angular/core';
import { PersonalInfoItemInterface } from './models/personal-info-modal';
import { SkillsInfoInterface } from './models/skills-modals';

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
      percentage: '90%'
    },
    {
      id:1,
      skillName:'.Net Core',
      percentage: '85%'
    },
    {
      id:1,
      skillName:'HTML',
      percentage: '90%'
    },
    {
      id:1,
      skillName:'CSS',
      percentage: '70%'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
