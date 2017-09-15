  import { BrowserModule } from '@angular/platform-browser';
  import { HttpModule } from '@angular/http';

  import { NgModule, ErrorHandler } from '@angular/core';
  import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
  import { AgmCoreModule } from '@agm/core';
  import { InAppBrowser } from '@ionic-native/in-app-browser';
  import { SplashScreen } from '@ionic-native/splash-screen';
  import { IonicStorageModule } from '@ionic/storage';
  import { ConferenceApp } from './app.component';
  import { AboutPage } from '../pages/about/about';
  import { ContactsPage } from '../pages/contacts/contacts';
  import { PopoverPage } from '../pages/about-popover/about-popover';
//Car App Pages
//import {DashBoradPage} form '../pages/carList/carList'
//import {CarMaintenancePage} form '../pages/carMaintenance/maintenance'
            //oil change, 
//import {CarSchedulePage} form '../pages/carSchedule/scheddule'
//import {CarInfPage} form '../pages/carInfo/info'
            //Extended Warrty how long, Manu. Warrenty, plate, Vin, oil type, order (amazon), timing Chain, spark plugs, type ch
//import {CarNotificationsPage} form '../pages/carNotification/notification'
            //future oil changes
            //tire rotation


//Car App Pages Ends

//Stock Management App
//import {StockListPage} form '../pages/stockList/stockList'
//import {??Page} form '../pages/??/??'
//import {SettingPage} form '../settingsPages/??/??'   //should be moved to a global page and custom forms
//Stock Management App Ends


  import { AccountPage } from '../pages/account/account';
  import { LoginPage } from '../pages/login/login';
  import { EarthQuakePage } from '../pages/earth-quake/earth-quake';
  import { MapsPage } from '../pages/maps/maps';
  import { SchedulePage } from '../pages/schedule/schedule';
  import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
  import { SessionDetailPage } from '../pages/session-detail/session-detail';
  import { SignupPage } from '../pages/signup/signup';
  import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
  import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
  import { InventoryDetailPage } from '../pages/inventory-detail/inventory-detail';
  import { TabsPage } from '../pages/tabs-page/tabs-page';
  import { TutorialPage } from '../pages/tutorial/tutorial';
  import { SupportPage } from '../pages/support/support';
  import { ConferenceData } from '../providers/conference-data';
  import { UserData } from '../providers/user-data';
  import { DataServiceProvider } from '../providers/data-service/data-service';

 
 /* import { AngularFireModule } from 'angularfire2'; */
  /*  import { AngularFireDatabase } from 'angularfire2/database';  */
  
  /*  import {environment} from './environments/environment';  */
   


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    ContactsPage,
    AccountPage,
    LoginPage,
    EarthQuakePage,
    MapsPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    InventoryDetailPage,
    TabsPage,
    TutorialPage,
    SupportPage 
  ],
  imports: [
    BrowserModule,
   /*   AngularFireModule.initializeApp(environment.firebase), */
   /*   AngularFireDatabase, */
     HttpModule,
     IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: InventoryDetailPage, name: 'InventoryDetail', segment: 'inventoryDetail/:category' },
        { component: EarthQuakePage, name: 'Map', segment: 'map' },
        { component: MapsPage, name: 'Maps', segment: 'maps' },
        { component: ContactsPage, name: 'Contacts', segment: 'contacts' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBfKqdlXT9NV-Is6nX07WTVJsH-Gd6tD8U'   
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    ContactsPage,
    AccountPage,
    LoginPage,
    EarthQuakePage,
    MapsPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    InventoryDetailPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    DataServiceProvider
  ]
})
export class AppModule { }
