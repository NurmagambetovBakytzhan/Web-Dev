import {Component, OnInit} from '@angular/core';
import {CompaniesService} from "../../services/companies.service";
import {Company} from "../../models";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies!: Company[]

  constructor(private companyService: CompaniesService) {

  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((companies: Company[]) => this.companies = companies);
  }
}
