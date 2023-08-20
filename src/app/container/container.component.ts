import { AfterViewInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }
}
