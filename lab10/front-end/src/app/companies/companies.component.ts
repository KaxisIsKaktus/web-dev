import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent implements OnInit{
  data: any[]
  constructor(private dataService: DataService,private router: Router) {
    this.data = new Array<any>
    }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.location.reload();
      }
    });
    this.dataService.getData().subscribe(data => {
      this.data = data
    });
  }
  fetchData(companyID: number) {
    this.router.navigate(['/app-vacancies'], {queryParams: {companyID: companyID}});
  }
}
