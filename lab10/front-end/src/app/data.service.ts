import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/companies/');
  }
  
  getVacancyData(companyID: number) {
    return this.http.get<any[]>(`http://127.0.0.1:8000/api/companies/${companyID}/vacancies/`);
  }

}
