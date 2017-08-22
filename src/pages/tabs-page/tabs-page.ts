import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EarthQuakePage } from '../earth-quake/earth-quake';
import { MapsPage } from '../maps/maps';
/*import { SchedulePage } from '../schedule/schedule';*/
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each ta

/*  tab1Root: any = SchedulePage;*/
  tab1Root: any = MapsPage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = EarthQuakePage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
