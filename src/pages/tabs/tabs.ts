import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = SearchPage;
  tab1Root = MyProfilePage;
  tab3Root = ContactPage;
  public hideTabs:boolean = false;

  constructor(public navCtrl:NavController) {

  }
  
}
