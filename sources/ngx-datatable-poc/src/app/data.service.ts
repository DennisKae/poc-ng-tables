import { Injectable } from '@angular/core';
import { CompanyData } from './company-data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCompanyData(callback) {

    const request = new XMLHttpRequest();
    request.open('GET', `assets/data/company.json`);

    request.onload = () => {
      callback(JSON.parse(request.response) as CompanyData);
    };

    request.send();

  }
}
