import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  userBio: string;

  profileImg1: string;
  profileImg2: string;
  profileImg3: string;
  profileImg4: string;
  profileImg5: string;
  profileImg6: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
    this.profileImg1 = 'assets/imgs/1.jpg';
    this.profileImg2 = 'assets/imgs/2.jpg';
    this.profileImg3 = 'assets/imgs/3.jpg';
    this.profileImg4 = 'assets/imgs/4.jpg';
    this.profileImg5 = 'assets/imgs/5.jpg';
    this.profileImg6 = 'assets/imgs/6.jpg';
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

  OpenModel(newPic){
    const pic = {
      "pic": newPic,
    };
    const myModal = this.modal.create('ModalPage', { data: pic });
    myModal.present();
  }

}
