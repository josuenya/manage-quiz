import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from './services/services.component';
import { Service } from './models/service.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayModal!: boolean;

  ngOnInit() {
    this.displayModal = false
  }

}
