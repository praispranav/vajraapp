import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// @ts-ignore
import logoImg from '../../../assets/sofbox-v2/images/logowhite.png';
// @ts-ignore
import footerLogo from '../../../assets/sofbox-v2/images/home-2/logo-white.png';
import { PluginsService } from '../../sofbox/plugins.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  vgpFeatures: any[] = [
    {
      image: "",
      text: "Manual checkin/out"
    },
    {
      image: "",
      text: "Patrol"
    },
    {
      image: "",
      text: "Checkpoints"
    },
    {
      image: "",
      text: "Visitor checkin/out"
    },
    {
      image: "",
      text: "Switch Guard"
    },
    {
      image: "",
      text: "Guard Attendance"
    },
    {
      image: "",
      text: "SOS"
    },
    {
      image: "",
      text: "Report Incident"
    },
    {
      image: "",
      text: "Shift Detail"
    },
    {
      image: "",
      text: "Shift Detail"
    },
    {
      image: "",
      text: "Start/end Shift"
    },
    {
      image: "",
      text: "Self checkin/out"
    },
  ]

  titleSectionProp: any = {
    title: 'Our Products',
    description: 'If you are planning on developing a product landing'
  };
  titleSectionProp2: any = {
    title: 'Our Products',
    description: 'If you are planning on developing a product landing'
  };

  guardPatrolTop: any = {
    title: 'Guard Patrol',
    description: 'If you are planning on developing a product landing'
  }

  adminPanelTop: any = {
    title: 'Admin Panel',
    description: 'If you are planning on developing a product landing'
  }

  anprPanelTop: any = {
    title: 'Automatic Number Plate Recognition',
    description: 'If you are planning on developing a product landing'
  }

  vvpSectionTitleProp:any = {
    title: 'Visitor Panel',
    description: 'If you are planning on developing a product landing'
  }

  List2: any[] = [
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

  adminPanelList:any = [
    
  ]

  anprDetails:any = [
    {
      image: "",
      text:"Auto open barrier gate"
    },
    {
      image: "",
      text:"Vehicle Inout Transaction"
    },
    {
      image: "",
      text:"AI ANPR with Display"
    },
    {
      image: "",
      text:"Vehicle Colour Detection"
    },
    {
      image: "",
      text:"Vehicle Size Detection"
    },
    {
      image: "",
      text:"Traffic Direction Detection"
    },
  ]
  
  vcaTitle:any = {
    class: 'text-center',
    title: 'Community App',
    description: 'If you are planning on developing a product landing'
  };

  vvpTitle:any = {
    class: 'text-center',
    title: 'Visitor Panel',
    description: 'If you are planning on developing a product landing'
  };


  vcaList:any[] = [
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
  
  // Visitor Registration or Walk-in
  // Visitor checkin checkout
  // OCR
  // Pre registered visitor
  // Instant notification
  // Sos alarm
  // Expected visitor
  // Delivery 
  // Visitor qr
  // Purpose of visit
  // Kiosk

  vvpList:any[] = [
    { 
      title: 'Walk-in',
      id: 'tab-unique-design',
      image: './assets/sofbox-v2/images/home-9/96.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      active: true
    },
    { 
      title: 'Visitor Check-in/check-out',
      id: 'tab-easy-to-customize',
      image: './assets/sofbox-v2/images/home-6/615.png',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'OCR',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Instant Notification',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'SOS Alarm',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Delivery',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'E Pass',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    { 
      title: 'Kiosk',
      id: 'tab-multipurpose-layout',
      image: './assets/sofbox-v2/images/home-6/612.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
  ];
  
  public navLogo: string = logoImg;
  public footerLogo: string = footerLogo;
  footerText: string = 'It is a long established fact that a reader will be distracted by the readable content.';
  footerTitle: string = 'Ready to get started?';
  footerDescription: string = 'It is a long established fact that a page when looking at its layout.';
  public navItems: any = [
    {
      href: '#iq-home', title: 'Home',
      _is_active: true
    },
    { 
      href: '#', title: 'Pages',
      is_link: false,
      _is_active: false,
      children: true,
      child: [
        { href: '/about-us', title: 'About Us' },
        { href: '/services', title: 'Serivces' },
        { href: '/pricing', title: 'Pricing' },
        { href: '/careers', title: 'Careers' },
        { href: '/faq', title: 'FAQ' },
        { href: '/team', title: 'Team' },
      ]
    },
    { 
      href: '#', title: 'Portfolio',
      is_link: false,
      _is_active: false,
      children: true,
      child: [
        { href: '/portfolio-2-column', title: 'Portfolio 2 Columns' },
        { href: '/portfolio-3-column', title: 'Portfolio 3 Columns' },
        { href: '/portfolio-4-column', title: 'Portfolio 4 Columns' },
        { href: '/portfolio-5-column', title: 'Portfolio 5 Columns' },
        { href: '/portfolio-no-space', title: 'Portfolio No Space' },
        { href: '/portfolio-details', title: 'Portfolio Details' },
      ]
    },
    { href: '#', title: 'Blog',
      is_link: false,
      _is_active: false,
      children: true,
      child: [
        { href: '/blog', title: 'Blog' },
        { href: '/blog-details', title: 'Blog Details' },
        { href: '/one-column-blog', title: 'One Column Blog' },
        { href: '/two-column-blog', title: 'Two Column Blog' },
        { href: '/three-column-blog', title: 'Three Column Blog' },
        { href: '/left-sidebar-grid', title: 'Left Sidebar Grid' },
        { href: '/right-sidebar-grid', title: 'Right Sidebar Grid' },
      ]
    },
    { href: '/contact-us', title: 'Contact Us', is_link: true  }
  ];

  List: any[] = [
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'},
    { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
  ];
  constructor(private plugins: PluginsService) { 

  }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    current.plugins.revolutionSlider();
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function () {
      current.plugins.index();
    }, 200);
  }

}
