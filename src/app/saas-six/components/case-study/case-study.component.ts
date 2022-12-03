import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit {

  titleSectionProp: any = {
    title: 'Admin Panel',
    description: 'If you are planning on developing a product landing app or website, take a look at this beautiful-crafted'
  };

  List: any[] = [
    { title: 'Analytical dashboard', description: 'Wordpress — eCommerce', image: './assets/images/adminPanel/analyticalDashboard.png'},
    { title: 'Patrol Management Access', description: 'Wordpress — eCommerce', image: './assets/images/adminPanel/patrolManagement.png'},
    { title: 'Visitor management Access', description: 'Wordpress — eCommerce', image: './assets/images/adminPanel/visitorManagement.png'},
    { title: 'Resident Management Access', description: 'Wordpress — eCommerce', image: './assets/images/adminPanel/residentManagement.png'},
    { title: 'Vehicle Management Access', description: 'Wordpress — eCommerce', image: './assets/images/adminPanel/vehicleDatabase.png'},
    { title: 'Checkpoints Tracking', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/17.jpg'},
    { title: 'Instant Alerts', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/17.jpg'},
    { title: 'Assignment And Site', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/17.jpg'},
    { title: 'User Management', description: 'Wordpress — eCommerce', image: './assets/sofbox-v2/images/home-1/17.jpg'},
  ];

//   Analytical dashboard
// Patrol Management Access
// Visitor management Access
// Resident Management Access
// Vehicle Management Access
// Checkpoints and Patrol Tracking
// Instant Alerts 
// Assignment And Site
// User Management 

  constructor() { }

  ngOnInit(): void {
  }

}
