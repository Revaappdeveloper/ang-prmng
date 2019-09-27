import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-primeng',
  templateUrl: './input-primeng.component.html',
  styleUrls: ['./input-primeng.component.css']
})
export class InputPrimengComponent implements OnInit {
  selectedCar: string;
  selectedCity: string;
  groupedCars=[];
  cars = [];
  cities = [];
  items = [];
  
  constructor() {
    this.groupedCars = [
      {
          label: 'Germany', 
          items: [
              {label: 'Audi', value: 'Audi'},
              {label: 'BMW', value: 'BMW'},
              {label: 'Mercedes', value: 'Mercedes'}
          ]
      },
      {
          label: 'USA', 
          items: [
              {label: 'Cadillac', value: 'Cadillac'},
              {label: 'Ford', value: 'Ford'},
              {label: 'GMC', value: 'GMC'}
          ]
      },
      {
          label: 'Japan', 
          items: [
              {label: 'Honda', value: 'Honda'},
              {label: 'Mazda', value: 'Mazda'},
              {label: 'Toyota', value: 'Toyota'}
          ]
      }
  ];
  this.cars = [
    {label: 'Audi', value: 'Audi'},
    {label: 'BMW', value: 'BMW'},
    {label: 'Fiat', value: 'Fiat'},
    {label: 'Ford', value: 'Ford'},
    {label: 'Honda', value: 'Honda'},
    {label: 'Jaguar', value: 'Jaguar'},
    {label: 'Mercedes', value: 'Mercedes'},
    {label: 'Renault', value: 'Renault'},
    {label: 'VW', value: 'VW'},
    {label: 'Volvo', value: 'Volvo'},
];
this.cities = [
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
];
this.items = [];
for (let i = 0; i < 10000; i++) {
    this.items.push({label: 'Item ' + i, value: 'Item ' + i});
}
}
   

  ngOnInit() {
  }

}
