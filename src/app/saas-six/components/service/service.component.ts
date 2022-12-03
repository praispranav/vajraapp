import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @Input('titleSection') titleSectionProp: any = {
    title: 'Our Products',
    description: 'If you are planning on developing a product landing'
  };

  @Input('list') List: any[] = [
    {
      title: 'Admin Panel',
      image: './assets/sofbox-v2/images/home-9/90.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Community App',
      image: './assets/sofbox-v2/images/home-9/91.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Guard Patrol',
      image: './assets/sofbox-v2/images/home-9/92.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Visitor Management',
      image: './assets/sofbox-v2/images/home-9/93.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Automatic Number Plate Recognition',
      image: './assets/sofbox-v2/images/home-9/94.png',
      desc: 'It is a long established fact that a reader will be distracted'
    },
    {
      title: 'Kiosk',
      image: './assets/sofbox-v2/images/home-9/95.png',
      desc: 'It is a long established fact that a reader will be distracted'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
