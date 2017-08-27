import { Injectable } from '@angular/core';
import { Report, NewReport } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EncountersService {
    encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

   constructor(private http: Http) {}

    getEncounters(): Promise<Report[]> {
      return this.http.get(this.encountersUrl)
                .toPromise()
                .then((response) => response.json().encounters)
                .catch(this.handleError);
    }
  
    postEncounters(encounter: NewReport): Promise<Report> {
      const headers = new Headers({'Content-type': 'application/json'});
      const body = JSON.stringify({ encounter });

      return this.http 
                  .post(this.encountersUrl, body, { headers: headers})
                  .toPromise()
                  .then(response => response.json().encounter)
                  .catch(this.handleError);
    }
   

    private handleError(error: any): Promise<any> {
      return Promise.reject(error.message || error);
    } 
}