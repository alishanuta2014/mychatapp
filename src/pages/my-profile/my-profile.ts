import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  userBio: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
  }

  ionViewWillEnter() {
    // remove padding from the page   -  https://forum.ionicframework.com/t/ionic-hide-tabs/37998/30
    let elements = document.querySelectorAll(".scroll-content");
    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.padding = '0';
        });
    }
  }

}
