import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { UserProfile } from '../../interfaces/UserProfile';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  styles: ['search.scss']
})
export class SearchPage {

  userProfile: UserProfile;

  loading: Loading;
  registerCredentials = {};
  email:  string;
  password: string;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
    console.log(this.userProfile);
    this.registerCredentials = { email: '', password: '' };

  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    // hide tabs on login page   -  https://forum.ionicframework.com/t/ionic-hide-tabs/37998/30
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
  }

  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = '';
        });
    }
  }

  login() {
    this.showLoading()
  }

  
  showLoading() {
    // https://devdactic.com/login-ionic-2/
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  } 

  createAccount() {

  }

}
