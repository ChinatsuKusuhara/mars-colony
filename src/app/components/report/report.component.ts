import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';

import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn
} from '@angular/forms';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService
  ]
})
export class ReportComponent implements OnInit {

  public alien: Alien[];\

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
      Validators.minLength(1)
    ]),
    alien_id: new FormControl('none', [Validators.required])
  })

  constructor(
    private alienService: AlienService
  ) {}

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);
  }

  async registerAlien() {
    const newAlien: NewAlien = {
      name: this.
    }
  }

}