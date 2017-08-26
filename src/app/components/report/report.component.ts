import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { EncountersService } from '../../services/encounters';

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
    AlienService,
    EncountersService
  ]
})
export class ReportComponent implements OnInit {

  alien: Alien[];

  public reportForm = new FormGroup({ 
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required]),
  });

  constructor(
    private alienService: AlienService,
    private reportService: EncountersService
  ) {}

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    console.log(aliens);

    this.alien = aliens;
  }
  async registerReport() {
    const newReport: NewReport = {
      date: '2011-11-11',
      colonist_id: '3',
      
      atype: this.reportForm.get('atype').value,
      action: this.reportForm.get('action').value
    };
    const report = await this.reportService.postEncounters(newReport);
    console.log('colonis was saved', report);
    console.log('Mars here I come!', this.reportForm);
  }
  
}