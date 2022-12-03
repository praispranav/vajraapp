import {Component, OnInit, ViewEncapsulation} from '@angular/core';
// @ts-ignore
import logoImg from '../../../assets/images/logo.png';
import {PluginsService} from '../../sofbox/plugins.service';

import { subHeader } from '../../../constants/menu';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  public navLogo: string = logoImg;

  // public navItems: any = [
  //   { href: '#iq-home', title: 'Home', active: true,
  //     children: true,
  //     child: subHeader
  //   },
  //   { href: '#how-it-works', title: 'About' },
  //   { href: '#software-features', title: 'Service' },
  //   /*{ href: '#great-screenshots', title: 'Screenshots' },*/
  //   { href: '#pricing', title: 'Pricing'},
  //   { href: '#team', title: 'Team' },
  //   { href: '#blog', title: 'Blog' },
  //   { href: '#contact-us', title: 'Contact' }
  // ];

  public navItems: any = [
    { href: '#iq-home', title: 'Home'},
    { href: '#how-it-works', title: 'About' },
    { href: '#software-features', title: 'Solution', children: true,
    child: subHeader },
    { href: '#team', title: 'Support' },
    { href: '#contact', title: 'Contact' }
  ];

  public footerText = 'Copyright © 2021 <a href="https://www.scorpius.com.my"target="_blank">Scorpius Solutions</a>. All rights reserved</p>'

  //public footerText = '© 2018 Sofbox Developed by <b>iqonicthemes</b>.';

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    // Init all plugins...
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
