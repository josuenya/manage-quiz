import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service.models';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  services!: Service[];
  ngOnInit() {
    this.services = [
      {
        title: 'Developement Web',
        description: 'Former vous en developement web a votre rithme a Domicile',
        imageUrl: 'https://image.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg',
        participant: 0,
      },
      {
        title: 'Developement Mobile',
        description: 'Former vous en developement web a votre rithme a Domicile',
        imageUrl: 'https://image.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg',
        participant: 0,
      },
      {
        title: 'Secretariat Bureatique',
        description: 'Former vous en developement web a votre rithme a Domicile',
        imageUrl: 'https://image.freepik.com/free-photo/customer-satisfaction-service-care-problem-solving_53876-120094.jpg',
        participant: 0,
      },
    ]

  }
}
