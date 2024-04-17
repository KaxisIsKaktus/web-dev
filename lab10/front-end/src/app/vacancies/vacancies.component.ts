import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent {
  
  companyID: number = 0
  data: any[]

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
  ){
    this.data = new Array<any>
  }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.location.reload();
      }
    });
    this.route.queryParams.subscribe(params => {
      this.companyID = params['companyID'];
      this.fetchVacancyData();
    })
  }
  fetchVacancyData() {
    this.dataService.getVacancyData(this.companyID).subscribe(data => {
      this.data = data
    });
  }
}
