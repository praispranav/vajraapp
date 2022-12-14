import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PluginsService} from '../../sofbox/plugins.service';
// @ts-ignore
import logoImg from '../../../assets/images/logo-footer.png';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(private plugins: PluginsService) { }

  public navLogo: string = logoImg;

  public navItems: any = [
    { href: '#iq-home', title: 'Home'},
    { href: '#how-it-works', title: 'About' },
    { href: '#software-features', title: 'Solution' },
    { href: '#team', title: 'Support' },
    { href: '#contact', title: 'Contact' }
  ];

  public footerText = ' Copyright © 2021 <a href="https://www.scorpius.com.my"target="_blank">Scorpius Solutions</a>. All rights reserved</p>'

  // © 2018 Sofbox Developed by <b>iqonicthemes</b>.';

  public socialNavItems: any = [
    { href: '#', icon: '<i class="fab fa-twitter"></i>' },
    { href: '#', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: '#', icon: '<i class="fab fa-google"></i>' },
    { href: '#', icon: '<i class="fab fa-github"></i>' },
  ];

  ngOnInit() {
    // Init all plugins...
    const current = this;
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
