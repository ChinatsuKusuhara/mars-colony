import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';

import { NewReport, Report } from '../../models/report';
import { Alien } from '../../models/alien';

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

  alien: Alien[];

  public reportForm = new FormGroup({ 
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required]),
  });

  constructor(
    private alienService: AlienService
  ) {}

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);

    this.alien = aliens;
  }
  async registerReport() {
    // const newReport: NewReport = {
    //   date: '2011-11-11',
    // }
  }
  
}