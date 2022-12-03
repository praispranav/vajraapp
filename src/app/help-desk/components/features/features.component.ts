import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'What can we help you?',
    description: 'If you are planning on developing a product landing'
  };

  List : any[] = [
    { title: 'Financial Services', class: 'circle-style', icon: 'flaticon flaticon-accounting', hoverClass: 'purple-hover' },
    { title: 'For Government', class: 'circle-style', icon: 'flaticon flaticon-government', hoverClass: 'green-hover' },
    { title: 'For Healthcare', class: 'circle-style', icon: 'flaticon flaticon-care', hoverClass: 'org-hover' },
    { title: 'Ecommerce Support', class: 'circle-style', icon: 'flaticon flaticon-deliver', hoverClass: 'purple-hover' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
