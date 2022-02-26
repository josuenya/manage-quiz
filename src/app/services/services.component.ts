import { Component, Input } from '@angular/core';
import { Service } from '../models/service.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent{
  @Input() service!: Service

  onAddTraining() {
    this.service.participant++
  }
}
