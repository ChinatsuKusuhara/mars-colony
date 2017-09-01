import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { EncountersService } from '../../services/encounters';
import { Router } from '@angular/router';
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
  providers: [
    AlienService,
    EncountersService
  ]
})
export class ReportComponent implements OnInit {

  public aliens: Alien[];
  public date;

  reportForm = new FormGroup({ 
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [Validators.required])
  })

  constructor(
    private alienService: AlienService,
    private reportService: EncountersService,
    private router: Router
  ) {}

  async ngOnInit() {
    const aliens = await this.alienService.getAliens();
    this.aliens = aliens;
    this.date = new Date().toISOString().slice(0,10);
  }
  
  async registerReport() {
    const newReport: NewReport = {
      atype: this.reportForm.get('atype').value,
      date: this.date,
      action: this.reportForm.get('action').value,
      colonist_id: '5'

    }
    await this.reportService.postEncounters(newReport);
          this.router.navigate(['encounters']);
  }
}