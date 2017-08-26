import { Component, OnInit } from '@angular/core';
import { EncountersService } from '../../services/encounters';
import { Report } from '../../models/report';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncountersService]
})
export class EncountersComponent implements OnInit {

  encounters: Report[];

  constructor(private encountersService: EncountersService) { }

  async ngOnInit() {
    const encounter = await this.encountersService.getEncounters();
    console.log(encounter);
    this.encounters = encounter;
  }

}


