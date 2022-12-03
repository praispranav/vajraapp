import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html',
  styleUrls: ['./service-tab.component.css']
})
export class ServiceTabComponent implements OnInit {

  @Input('title') titleSectionProp: any = {
    class: 'text-center',
    title: 'Community App',
    description: 'If you are planning on developing a product landing'
  };

  @Input('list') List: any[] = [
    { 
      title: 'Resident Management',
      id: 'tab-unique-design',
      image: './assets/sofbox-v2/images/home-9/96.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      active: true
    },
    { 
      title: 'Unit Management',
      id: 'tab-easy-to-customize',
      image: './assets/sofbox-v2/images/home-6/615.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Visitor Management',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Booking Facility',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'SOS',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Complaint',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'E News',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Vehicle Soft/Unlock',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.show_content').find('.active').removeClass('active show');
    jquery('.nav-item').find('.active1').removeClass('active1');
    jquery('#' + id).addClass('active show');
  }

}
