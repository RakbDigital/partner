webpackJsonp([9],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundVerifyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the BackgroundVerifyProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BackgroundVerifyProvider = (function () {
    function BackgroundVerifyProvider(http) {
        this.http = http;
    }
    BackgroundVerifyProvider.prototype.verify = function (json) {
        console.log('Hello BackgroundVerifyProvider Provider');
        return this.http.post('https://us-central1-mobilestyler-dev.cloudfunctions.net/backgroundVerification', json);
    };
    BackgroundVerifyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BackgroundVerifyProvider);
    return BackgroundVerifyProvider;
}());

//# sourceMappingURL=background-verify.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Bookings Service/Provider
 * @author Phani Mahesh Birudukota
 */
var BookingsProvider = (function () {
    function BookingsProvider(db) {
        this.db = db;
    }
    BookingsProvider.prototype.updateBooking = function (stage, booking) {
        booking.stage = stage;
        return this.db.list('/booking').update(booking.key, booking);
    };
    BookingsProvider.prototype.getAllBookingsByUid = function (uid) {
        return this.db.list('/booking', function (ref) { return ref.orderByChild('partnerId').equalTo(uid); });
    };
    BookingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], BookingsProvider);
    return BookingsProvider;
}());

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toggle_toggle__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(40);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, notificationService, loadingCtrl, alertCtrl, toggleService, _authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notificationService = notificationService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toggleService = toggleService;
        this._authService = _authService;
        this.notificationsRef = [];
        this.notifications = [];
        var loading = this.loadingCtrl.create({
            content: 'Loading notifications Please Wait...'
        });
        loading.present();
        this.notificationsRef = this.notificationService
            .getInAppNotificationsByUid(this._authService.getUserData().uid);
        this.notifications = this.notificationsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        loading.dismiss();
        if (localStorage.getItem('toggleValue') !== null) {
            this.toggleValue = JSON.parse(localStorage.getItem('toggleValue'));
        }
    }
    NotificationsPage.prototype.toggle = function (value) {
        this.toggleService.toggle(value);
    };
    NotificationsPage.prototype.removeNotification = function (notificationKey) {
        var loading = this.loadingCtrl.create({
            content: 'Loading notifications Please Wait...'
        });
        this.notificationsRef.remove(notificationKey);
        loading.present();
        this.notificationsRef = this.notificationService
            .getInAppNotificationsByUid(this._authService.getUserData().uid);
        this.notifications = this.notificationsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        loading.dismiss();
    };
    NotificationsPage.prototype.presentConfirm = function (notification) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: notification.title,
            message: notification.description,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        console.log('remove clicked');
                        _this.removeNotification(notification.key);
                    }
                }
            ]
        });
        alert.present();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/notifications/notifications.html"*/`<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n    <ion-navbar color="grey" style="color:#fff">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-grid style="float:right;width:190px">\n            <ion-row style="margin-left: 35px">\n                <ion-col col-5 style="padding-top: 15px"> <i style="color:#fff;padding-top:15px" [hidden]="toggleValue">Offline</i> <i style="color:#fff;padding-top:15px" [hidden]="!toggleValue">Online</i></ion-col>\n                <ion-col col-4 style="height: 42px;">\n                    <ion-toggle color="energized" [(ngModel)]="toggleValue" (ionChange)="toggle(toggleValue)"></ion-toggle>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n    <!--<ion-card style="padding:0px;width:100%;height:100%" class="rounded-card">\n\n        <ion-card-header style="padding:11px;border-bottom:1px solid #6d7993">\n\n            <div class="row" style="margin-bottom:0px">\n\n                <div class="col-xs-12" style="padding:0px">\n                    <div class="row">\n                        <div class="col-xs-12 text" style="text-align: left;\n                        padding: 0px;\n                        font-weight: bold;\n                        margin-top: 5px;\n                        margin-left: 13px;\n                        margin-bottom: -5px;">\n                            Notifications\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </ion-card-header>\n        <ion-card-content><br>\n            <p align="center" class="text" color="grey">No notifications found!</p>\n\n        </ion-card-content>\n    </ion-card>-->\n\n    <ion-list class="login-sliding-demo">\n        <ion-item style="height: 60px;border-radius:10px;" class="no-padding" *ngIf="notifications.length<1">\n            <p>Sorry No Notifications found</p>\n        </ion-item>\n        <ion-item-sliding *ngFor="let notification of notifications | async" style="margin-bottom: 10px; border-radius: 12px" #item>\n            <ion-item no-lines style="height: 90px" class="no-padding" (click)="presentConfirm(notification)">\n                <ion-icon name="home" class="expand-hide"></ion-icon>\n                <div class="container text-left pull-top">\n                    <div class="pull-right">\n                        <h5 class="text">{{notification.createdAt | date}}</h5>\n                        <h5 class="text">{{notification.createdAt | date:\'shortTime\'}}</h5>\n                    </div>\n                    <h4 class="text bolder slight-up">{{notification.title}}</h4>\n                    <br>\n                    <p class="text text-left description" style="margin-top:5px">\n                        <span>{{notification.description}}</span>\n                    </p>\n                </div>\n            </ion-item>\n            <ion-item-options side="right">\n                <button style="background: red;color: wheat;" (click)="removeNotification(notification.key)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notifications_notifications__["a" /* NotificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toggle_toggle__["a" /* ToggleProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentsPage = (function () {
    function PaymentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deposit = {
            account_number: '',
            routing_number: '',
            account_type: ''
        };
        this.deposit = {
            account_number: '',
            routing_number: '',
            account_type: ''
        };
    }
    PaymentsPage.prototype.addPayment = function () {
        console.log(this.deposit);
    };
    PaymentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentsPage');
    };
    PaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payments',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/payments/payments.html"*/`<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n    <ion-navbar color="grey">\n        <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n  </button>\n\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n    <ion-card style="padding:0px;width:100%;margin-left: auto;">\n\n        <ion-card-header style="padding:0px">\n\n            <div class="row" style="margin-bottom:5px">\n\n                <div class="col-xs-12" style="padding:0px">\n                    <div class="row">\n                        <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -25px;padding-bottom: 10px">\n                            Direct Proposal\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <div class="row row-bottom" style="width:100% ">\n                <div class="col-xs-12">\n                    <h4>Account Number</h4>\n                    <input class="form-control round margin-bottom" type="text" name="Name" [(ngModel)]="deposit.account_number">\n                </div>\n                <div class="col-xs-12">\n                    <h4>Routing Number</h4>\n                    <input class="form-control round margin-bottom" type="text" name="Gender" [(ngModel)]="deposit.routing_number">\n                </div>\n                <div class="col-xs-12">\n                    <h4>Account Type</h4>\n                    <input class="form-control round margin-bottom" type="text" name="Gender" [(ngModel)]="deposit.account_type">\n                </div>\n            </div>\n            <div class="pull-right control-buttons">\n\n                <button (click)="addPayment()" type="button" class="btn bt-default round grey-background control-button" style="margin-left:10px;    margin-top: -35px;margin-right: 20px;" color="grey">Save</button>\n            </div>\n\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left: auto;">\n\n        <ion-card-header style="padding:0px">\n\n            <div class="row" style="margin-bottom:5px">\n\n                <div class="col-xs-12" style="padding:0px">\n                    <div class="row">\n                        <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -25px;">\n                            Earnings\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n            <hr>\n        </ion-card-header>\n        <ion-card-content style="height:150px">\n\n\n\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/payments/payments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PaymentsPage);
    return PaymentsPage;
}());

//# sourceMappingURL=payments.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_start__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toggle_toggle__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_background_verify_background_verify__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(nav, navParams, _auth, alertCtrl, loadingCtrl, fb, profileService, inAppBrowser, _authService, camera, http, verifyService, DomSanitizer, toggleService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this._auth = _auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.profileService = profileService;
        this.inAppBrowser = inAppBrowser;
        this._authService = _authService;
        this.camera = camera;
        this.http = http;
        this.verifyService = verifyService;
        this.DomSanitizer = DomSanitizer;
        this.toggleService = toggleService;
        this.address_save = true;
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: '',
            partnerPhone: ''
        };
        this.deposit = {
            account_number: '',
            routing_number: '',
            account_type: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00'
        };
        this.profile_pic = "assets/profile_icon.png";
        this.flag = false;
        this.categories = [];
        this.sub_categories = [];
        this.addresses = [];
        this.services = [];
        this.file_name = '';
        this.zip_error = '';
        this.profile_editable = true;
        this.deposit_editable = true;
        this.category_data = ["Haircuts", "Color Services", "Hair Treatments", "Hair Styling", "Manicure", "Pedicure", "Makeup Artist", "Waxing Technician"];
        this.sub_category_data = {
            "Haircuts": [
                { "name": "Men's Haircut" },
                { "name": "Women's Haircut" },
                { "name": "Men's Barber" }
            ], "Color Services": [
                {
                    "name": "Retouch"
                },
                {
                    "name": "Highlights/Balayage"
                },
                {
                    "name": "Ombre"
                },
                {
                    "name": "All over coloring "
                },
                {
                    "name": "Color Correction "
                }
            ], "Hair Treatments": [
                {
                    "name": "Deep Conditioning"
                },
                {
                    "name": "Brazilian Blowout"
                },
                {
                    "name": "Keratin"
                },
                {
                    "name": "Perms"
                }
            ], "Hair Styling": [
                {
                    "name": "Blow outs"
                },
                {
                    "name": "Up/Down Dos"
                },
                {
                    "name": "Hair Extensions "
                }
            ], "Manicure": [
                {
                    "name": "Manicure"
                },
                {
                    "name": "Acrylic"
                },
                {
                    "name": "Dip Powder"
                },
                {
                    "name": "Gel"
                }
            ], "Pedicure": [
                {
                    "name": "Basic Pedicure"
                },
                {
                    "name": "Spa Pedicure"
                }
            ], "Makeup Artist": [
                {
                    "name": "Special Occasion"
                },
                {
                    "name": "Bridal"
                }
            ], "Waxing Technician": [
                {
                    "name": "Facial"
                },
                {
                    "name": "Arms"
                },
                {
                    "name": "Legs"
                },
                {
                    "name": "Brazilian"
                },
                {
                    "name": "Back"
                }
            ]
        };
        this.service_radius = [5, 10, 15, 20, 25];
        this.isBackgroundClean = false;
        this.backgroundCheck = {};
        this.serviceKeys = [];
        this.profileKeys = [];
        this.adressPage = true;
        this.profilePage = false;
        this.servicePage = true;
        if (localStorage.getItem('toggleValue') !== null) {
            this.toggleValue = JSON.parse(localStorage.getItem('toggleValue'));
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: '',
            partnerPhone: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00',
        };
        this.stripeUrl = 'https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://us-central1-mobilestyler-prod.cloudfunctions.net/stripeConnectCallback&client_id=ca_C43PMZpc3d8yybNehw1O0mFJbd3jo8Kh&state=';
        this.stripeRedirectUrl = 'https://us-central1-mobilestyler-prod.cloudfunctions.net/stripeConnectCallback';
        this.stripeDashboard = 'http://us-central1-mobilestyler-prod.cloudfunctions.net/stripeDashboard';
        profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
    }
    ProfilePage_1 = ProfilePage;
    ProfilePage.prototype.toggle = function (value) {
        this.toggleService.toggle(value);
    };
    ProfilePage.prototype.validateAddress = function (address) {
        this.name_error = '';
        this.address_error = '';
        this.address2_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        var addressPattern = new RegExp("/^s*S+(?:s+S+){2}/");
        var zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        var valid = 1;
        if (!(namePattern.test(address.name))) {
            this.name_error = 'enter valid name without spaces';
            valid = 0;
        }
        /*if(!(addressPattern.test(address.address1))){
         this.address_error='enter valid address';
         valid=0;
         }
         if(!(addressPattern.test(address.address2))){
         this.address2_error='enter valid address';
         valid=0;
         }*/
        return valid;
    };
    ProfilePage.prototype.checkFirstName = function (name) {
        this.firstname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.firstname_error = 'enter valid firstname';
        }
    };
    ProfilePage.prototype.checkLastName = function (name) {
        this.lastname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.lastname_error = 'enter valid lastname';
        }
    };
    ProfilePage.prototype.checkEmail = function (email) {
        this.email_error = '';
        var emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!(emailPattern.test(email))) {
            this.email_error = 'enter valid email';
        }
    };
    ProfilePage.prototype.checkPhone = function (phone) {
        var phonePattern = new RegExp("^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$");
        this.phone_error = '';
        if (!(phone.length == 10)) {
            this.phone_error = 'enter valid mobile number';
        }
    };
    ProfilePage.prototype.loadZipCode = function () {
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=30350';
        return this.http.get(url)
            .map(function (res) { return res.json; });
    };
    ProfilePage.prototype.getCityState = function (zipcode) {
        var _this = this;
        console.log(zipcode);
        console.log(JSON.stringify(zipcode).length);
        if (zipcode) {
            if (zipcode.length == 5) {
                this.http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode).subscribe(function (data) {
                    var response = data.json();
                    //console.log(response.results[0].address_components[1].long_name)
                    _this.address.city = response.results[0].address_components[1].long_name;
                    //console.log(response.results[0].address_components[3].short_name)
                    _this.address.state = response.results[0].address_components[3].short_name;
                    _this.zip_error = '';
                });
            }
            else {
                this.zip_error = 'Enter valid zip code';
            }
        }
        else {
            this.zip_error = 'Enter valid zip code';
        }
    };
    ProfilePage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 50
        }).then(function (imageData) {
            _this.file_src = 'data:image/jpeg;base64,' + imageData;
            _this.file_name = 'Certificate.png';
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.uploadProfilePic = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            quality: 50
        }).then(function (imageData) {
            _this.profile_pic = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.loadProfileKeys = function (json) {
        this.profileKeys = JSON.parse(JSON.stringify(json));
        this.loading.dismiss();
    };
    ProfilePage.prototype.loadServiceDataKeys = function (json) {
        this.serviceKeys = JSON.parse(JSON.stringify(json));
    };
    ProfilePage.prototype.loadProfileDataOnUI = function (json) {
        console.log(json);
        json = (JSON.parse(JSON.stringify(json)));
        this.isBackgroundClean = json.isBackgroundClean;
        this.backgroundCheck = json.backgroundCheck;
        if (json.backgroundCheck) {
            if (json.backgroundCheck.Results) {
                this.registration = true;
                if (json.isBackgroundClean) {
                    this.verified = true;
                }
                else {
                    this.verified = false;
                }
            }
            else {
                this.verified = true;
                this.registration = false;
            }
        }
        else {
            this.verified = true;
            this.registration = false;
        }
        if (json.backgroundCheck.Results) {
            this.registration = false;
        }
        else {
            this.registration = true;
        }
        if (json.partnerEmail)
            this.model.partnerEmail = json.partnerEmail;
        if (json.addresses)
            if (json.addresses.length)
                this.addresses = json.addresses;
        if (json.partnerGender)
            this.model.partnerGender = json.partnerGender;
        if (json.partnerFirstName)
            this.model.partnerFirstName = json.partnerFirstName;
        if (json.partnerLastName)
            this.model.partnerLastName = json.partnerLastName;
        if (json.partnerMiddleName)
            this.model.partnerMiddleName = json.partnerMiddleName;
        if (json.profilePicture)
            this.profile_pic = json.profilePicture;
        if (json.partnerPhone)
            this.model.partnerPhone = json.partnerPhone;
        if (json.idCard.name)
            this.file_name = json.idCard.name;
        if (json.idCard.picture)
            this.file_src = json.idCard.picture;
        if (json.createdAt)
            this.createdAt = json.createdAt;
        console.log(json);
        if (json.stripe) {
            if (json.stripe.isStripeActivated)
                this.isStripeActivated = json.stripe.isStripeActivated;
            if (json.stripe.stripeAccountId) {
                this.stripeAccountId = json.stripe.stripeAccountId;
            }
        }
        /*if (json.stripe.isStripeActivated)
         this.isStripeActivated = json.stripe.isStripeActivated;
         if (json.stripe.stripeAccountId){
         this.stripeAccountId = json.stripe.stripeAccountId;
         }*/
    };
    ProfilePage.prototype.loadServiceData = function (json) {
        console.log(json);
        this.services = [];
        json = JSON.parse(JSON.stringify(json));
        for (var i = 0; i < json.length; i++) {
            this.services[i] = json[i];
            this.services[i].key = this.serviceKeys[i].key;
            if (json[i].status)
                this.services[i].status = json[i].status;
            else
                this.services[i].status = false;
            if (json[i].service == "") {
                this.services[i].status = true;
            }
        }
    };
    /* functions to handle address data */
    ProfilePage.prototype.addAddress = function (addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
            geofire: false,
            status: false
        };
        console.log(json);
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_1 = arrayOfKeys; _i < arrayOfKeys_1.length; _i++) {
            var obj = arrayOfKeys_1[_i];
            if (obj == 'address2' || obj == 'geofire' || obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "" || json[obj].length < 2) {
                error = true;
                this.loadError("Please provide a valid " + obj);
                break;
            }
        }
        if (this.validateAddress(addressData)) {
            if (!error) {
                this.addresses.push(json);
                //this.save();
                this.showAddress();
            }
        }
    };
    ProfilePage.prototype.showAddress = function () {
        this.address.index = null;
        this.address.name = "";
        this.address.address1 = "";
        this.address.address2 = "";
        this.address.city = "";
        this.address.state = "";
        this.address.zip = "";
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    ProfilePage.prototype.showUpdateAddress = function () {
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    /* get values into popup for edit*/
    ProfilePage.prototype.updateAddress = function (i, addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.address = json;
        this.address.index = i;
    };
    /*store updated address data */
    ProfilePage.prototype.saveUpdatedAddress = function (addressData) {
        console.log(addressData);
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_2 = arrayOfKeys; _i < arrayOfKeys_2.length; _i++) {
            var obj = arrayOfKeys_2[_i];
            if (obj == 'address2' || obj == 'geofire' || obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "" || json[obj].length < 2) {
                error = true;
                this.loadError("Please provide a valid " + obj);
                break;
            }
        }
        if (!error) {
            this.addresses[addressData.index - 1] = json;
            this.address = {
                name: '',
                address1: '',
                address2: '',
                city: '',
                zip: '',
                state: ''
            };
            this.showAddress();
            //this.save();
        }
    };
    /*remove address from stack*/
    ProfilePage.prototype.removeAddress = function (index) {
        index = index - 1;
        var temp = [];
        for (var j = 0; j < this.addresses.length; j++) {
            if (j != index) {
                var json = {
                    name: this.addresses[j].name,
                    address1: this.addresses[j].address1,
                    address2: this.addresses[j].address2,
                    city: this.addresses[j].city,
                    zip: this.addresses[j].zip,
                    state: this.addresses[j].state
                };
                temp.push(json);
            }
        }
        this.addresses = temp;
        this.showAddress();
        //this.save();
    };
    /*functions to handle service data */
    ProfilePage.prototype.saveUpdatedService = function (service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            partnerEmail: this.model.partnerEmail,
            partnerGender: this.model.partnerGender,
            partnerFirstName: this.model.partnerFirstName,
            partnerLastName: this.model.partnerLastName,
            profilePicture: this.profile_pic,
            puid: service.puid
        };
        if (service.key) {
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
            json['updatedAt'] = new Date().toISOString();
        }
        this.services[service.index - 1] = json;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '',
        };
        this.showUpdateServiceCard();
        //this.save();
    };
    ProfilePage.prototype.showService = function () {
        this.service.index = null;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '0.00'
        };
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    ProfilePage.prototype.showUpdateServiceCard = function () {
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    ProfilePage.prototype.addService = function (service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_3 = arrayOfKeys; _i < arrayOfKeys_3.length; _i++) {
            var obj = arrayOfKeys_3[_i];
            if (obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "") {
                error = true;
                this.loadError("Please provide a valid " + obj);
                break;
            }
        }
        if (!error) {
            this.services.push(json);
            console.log(this.services);
            this.showService();
            //this.save();
        }
    };
    ProfilePage.prototype.findAddressIndex = function (name) {
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].name == name) {
                return i;
            }
        }
    };
    ProfilePage.prototype.updateService = function (i, service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.findAddressIndex(service.location.name),
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            puid: service.puid
        };
        if (service.key) {
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
        }
        this.service = json;
        this.service.index = i + 1;
        this.getSubCategories();
    };
    ProfilePage.prototype.removeService = function (index) {
        index = index - 1;
        this.services[index].status = true;
        this.showService();
        //this.save();
    };
    /*normal services */
    ProfilePage.prototype.getSubCategories = function () {
        this.sub_categories = this.sub_category_data[this.service.service];
    };
    ProfilePage.prototype.clearForm = function () {
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '',
        };
    };
    /*function to handle phone number*/
    ProfilePage.prototype.saverange = function ($e, d) {
        if (this.model.phone) {
            var x = this.model.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.model.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    };
    ProfilePage.prototype.imageChange = function ($event) {
        this.readThis($event.target);
    };
    ProfilePage.prototype.profileImageChange = function ($event) {
        this.readProfileImage($event.target);
    };
    ProfilePage.prototype.readProfileImage = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.profile_pic = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProfilePage.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        this.file_name = file.name;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.file_src = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProfilePage.calculateAge = function (birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    ProfilePage.prototype.saveProfile = function () {
        var _this = this;
        if (this.isBackgroundClean) {
            var loading_1 = this.loadingCtrl.create({
                content: 'please wait'
            });
            loading_1.present();
            var d = new Date();
            var n = d.toISOString();
            var json = this.model;
            json.services = this.services;
            json.address = this.addresses;
            json.profilePicture = this.profile_pic;
            json.partnerPhone = this.model.partnerPhone;
            json.backgroundCheck = this.backgroundCheck;
            json.isBackgroundClean = this.isBackgroundClean;
            json.idCard = {
                'name': this.file_name,
                'picture': this.file_src
            };
            if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
                delete json.idCard;
            }
            json.createdAt = n;
            json.puid = localStorage.getItem('uid');
            console.log("data" + JSON.stringify(json));
            this.flag = false;
            var arrayOfKeys = Object.keys(this.model);
            var error = false;
            /* for(let obj of arrayOfKeys){
             if(!(this.model[obj])){
             error=true;
             this.loadError("please provide "+obj);
             if(loading){
             loading.dismiss();
             loading=null;
             }
             break;
             }
             }*/
            // if(!error){
            if (1) {
                // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
                if (0) {
                    this.loadError("Please provide a valid id proof");
                    if (loading_1) {
                        loading_1.dismiss();
                        loading_1 = null;
                    }
                }
                else {
                    //alert('success')
                    console.log(json);
                    this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                        if (loading_1) {
                            loading_1.dismiss();
                            loading_1 = null;
                        }
                        _this.reloadCompleteData();
                        var alert = _this.alertCtrl.create({
                            message: 'Congratulations profile updated successfully',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    handler: function (data) {
                                    }
                                }]
                        });
                        alert.present();
                    }, function (reject) {
                        console.log('error while storing data. please try again');
                        if (loading_1) {
                            loading_1.dismiss();
                            loading_1 = null;
                        }
                    });
                }
            }
        }
        else {
            var alert_1 = this.alertCtrl.create({
                message: 'Sorry. Your background check failed. Please contact us.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel'
                    }]
            });
            alert_1.present();
        }
    };
    ProfilePage.prototype.storeData = function (response) {
        var _this = this;
        var apiResponse = response;
        response = response.Results;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        json.backgroundCheck = apiResponse;
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.puid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        if (1) {
            if (0) {
                this.loadError("Please provide a valid id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                if (response.Records.length < 1) {
                    json.isBackgroundClean = true;
                }
                else if (response.Recrords[0].Category == "TRAFFIC") {
                    json.isBackgroundClean = true;
                }
                else {
                    json.isBackgroundClean = false;
                }
                console.log(json);
                this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                    _this.loadSuccess(json.isBackgroundClean);
                }, function (reject) {
                    console.log('error while storing data. please try again');
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                        _this.loadError('Something went wrong. Try again');
                    }
                });
            }
        }
    };
    ProfilePage.prototype.completeRegistration = function () {
        var _this = this;
        if (this.model.partnerFirstName == "" || this.model.partnerFirstName == " ") {
            this.loadError('please enter valid firstname');
        }
        else if (this.model.partnerLastName == "" || this.model.partnerLastName == " ") {
            this.loadError('please enter valid lastname');
        }
        else if (this.model.birthDate == "" || this.model.birthDate == " " || !this.model.birthDate) {
            this.loadError('please enter valid date of birth');
        }
        else if (this.addresses.length) {
            var loading_2 = this.loadingCtrl.create({
                content: 'verifying your background'
            });
            loading_2.present();
            var jsonData = {
                credentials: {
                    account_id: "128384",
                    api_key: "MShEcPs9wAEcgd2jDlhMOsAjnw"
                },
                product: "criminal_database",
                data: {
                    FirstName: this.model.partnerFirstName,
                    LastName: this.model.partnerLastName,
                    MiddleName: this.model.partnerMiddleName,
                    Address: this.addresses[0].address1,
                    City: this.addresses[0].city,
                    State: this.addresses[0].state,
                    Zip: this.addresses[0].zip,
                    DOB: ProfilePage_1.calculateAge(this.model.birthDate),
                    AgeMin: ProfilePage_1.calculateAge(this.model.birthDate),
                    AgeMax: 70,
                    Limit: 5,
                    ExactMatch: "no"
                }
            };
            this.verifyService.verify(jsonData).subscribe(function (res) {
                loading_2.dismiss();
                _this.storeData(res);
                // this.storeData(JSON.stringify(res).Results);
            }, function (err) {
                loading_2.dismiss();
                _this.loadError('Sorry something went wrong try again');
            });
        }
        else {
            this.loadError('Please add atleast 1 address');
        }
    };
    ProfilePage.prototype.save = function () {
        var _this = this;
        if (this.isBackgroundClean && this.backgroundCheck) {
            var loading_3 = this.loadingCtrl.create({
                content: 'please wait'
            });
            loading_3.present();
            var d = new Date();
            var n = d.toISOString();
            var json = this.model;
            json.services = this.services;
            json.address = this.addresses;
            json.profilePicture = this.profile_pic;
            json.partnerPhone = this.model.partnerPhone;
            json.idCard = {
                'name': this.file_name,
                'picture': this.file_src
            };
            if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
                delete json.idCard;
            }
            json.createdAt = n;
            json.puid = localStorage.getItem('uid');
            console.log("data" + JSON.stringify(json));
            this.flag = false;
            var arrayOfKeys = Object.keys(this.model);
            var error = false;
            /* for(let obj of arrayOfKeys){
             if(!(this.model[obj])){
             error=true;
             this.loadError("please provide "+obj);
             if(loading){
             loading.dismiss();
             loading=null;
             }
             break;
             }
             }*/
            // if(!error){
            if (1) {
                // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
                if (0) {
                    this.loadError("Please provide a valid id proof");
                    if (loading_3) {
                        loading_3.dismiss();
                        loading_3 = null;
                    }
                }
                else {
                    //alert('success')
                    console.log(json);
                    this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                        if (loading_3) {
                            loading_3.dismiss();
                            loading_3 = null;
                        }
                        _this.reloadCompleteData();
                    }, function (reject) {
                        console.log('error while storing data. please try again');
                        if (loading_3) {
                            loading_3.dismiss();
                            loading_3 = null;
                        }
                    });
                }
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                message: 'Your profile not verified. Please contact us',
                buttons: [{
                        text: 'OK',
                        role: 'cancel'
                    }]
            });
            alert_2.present();
        }
    };
    ProfilePage.prototype.reloadPage = function (loading, ref) {
        this.loadServiceDataKeys(ref);
        if (loading) {
            loading.dismiss();
            loading = null;
        }
    };
    ProfilePage.prototype.reloadCompleteData = function () {
        var _this = this;
        this.profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        this.profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        this.profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        this.profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
    };
    ProfilePage.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        this.loading = this.loadingCtrl.create({
            content: message
        });
    };
    ProfilePage.prototype.loadError = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this._auth.signoutUser().then(function (res) {
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__start_start__["a" /* StartPage */]);
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    ProfilePage.prototype.connectStripe = function () {
        var _this = this;
        var options = {
            zoom: 'no',
            location: 'no'
        };
        var browser = this.inAppBrowser.create(this.stripeUrl + this.profileKeys[0].key, '_blank', options);
        browser.on('loadstop').subscribe(function (event) {
            if ((event.url).indexOf(_this.stripeRedirectUrl) === 0) {
                browser.hide();
                browser.close();
                _this.nav.setRoot(ProfilePage_1);
            }
        });
    };
    ProfilePage.prototype.openPaymentsDashBoard = function () {
        var options = {
            zoom: 'no',
            location: 'no'
        };
        var browser = this.inAppBrowser.create(this.stripeDashboard + '?accId=' + this.stripeAccountId, '_blank', options);
    };
    ProfilePage.prototype.loadSuccess = function (verify) {
        this.reloadCompleteData();
        if (verify) {
            var alert_3 = this.alertCtrl.create({
                message: 'Thank you for completing your profile.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel'
                    }]
            });
            alert_3.present();
        }
        else {
            var alert_4 = this.alertCtrl.create({
                message: 'Sorry, Your background check failed. Please contact us.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel'
                    }]
            });
            alert_4.present();
        }
    };
    ProfilePage = ProfilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/profile/profile.html"*/`<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n    <ion-navbar color="grey" style="color:#fff">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <!--<ion-grid style="float:right;width:115px">\n            <ion-row>\n                <ion-col col-6 style="padding-top:15px"> <i style="color:#fff;" [hidden]="toggleValue"> Offline</i> <i style="color:#fff" [hidden]="!toggleValue">Online</i></ion-col>\n                <ion-col col-6>\n                    <ion-toggle color="energized" [(ngModel)]="toggleValue" (ionChange)="toggle(toggleValue)"></ion-toggle>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>-->\n\n        <ion-grid style="float:right;width:190px">\n            <ion-row style="margin-left: 35px">\n                <ion-col col-5 style="padding-top: 15px"> <i style="color:#fff;padding-top:15px" [hidden]="toggleValue">Offline</i> <i style="color:#fff;padding-top:15px" [hidden]="!toggleValue">Online</i></ion-col>\n                <ion-col col-4 style="height: 42px;">\n                    <ion-toggle color="energized" [(ngModel)]="toggleValue" (ionChange)="toggle(toggleValue)"></ion-toggle>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n    </ion-navbar>\n</ion-header>\n<ion-content style="background:#EDF0F3" padding>\n\n\n    <ion-card style="padding:0px;width:100%; margin-left: auto; " [hidden]="adressPage">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row" style="padding-top: 10px">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showAddress()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Add Location\n                    </div>\n                </div>\n            </div>\n            <hr style="margin-top: 0px; ">\n        </ion-card-header>\n        <ion-card-content>\n            <div class="row">\n\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Name</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.name" (keyup)="validateAddress(address)"> {{name_error}}\n\n                    </div>\n                </div>\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Address Line 1</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address1" (keyup)="validateAddress(address)">{{address_error}}\n                    </div>\n                </div>\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Address Line 2</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address2" (keyup)="validateAddress(address)">{{address2_error}}\n                    </div>\n                </div>\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Zip</label>\n                    <div>\n                        <input class="form-control round " pattern="[0-9]{5}" type="text" name="Email" [(ngModel)]="address.zip" (keyup)="getCityState(address.zip)">\n                    </div>\n                </div>\n\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-6" style="text-align:left">\n                    <label class="control-label">City</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.city" readonly>\n                    </div>\n                </div>\n                <div class="form-group col-xs-6" style="text-align:left">\n                    <label class="control-label">State</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.state" readonly>\n                    </div>\n                </div>\n            </div>\n\n            <div class="footer text-center" (click)="addAddress(address)" *ngIf="!address.index" [hidden]="!verified">\n                Save\n            </div>\n            <div class="footer text-center" (click)="saveUpdatedAddress(address)" *ngIf="address.index" [hidden]="!verified">\n                Edit\n            </div>\n            <div class="footer text-center danger" *ngIf="address.index" (click)="removeAddress(address.index)" [hidden]="!verified" style="margin-top:10px;background:#f44336 !important">\n                Remove\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <!-- services popup -->\n    <ion-card style="padding:0px;width:100%;margin-left: auto" [hidden]="servicePage">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showUpdateServiceCard()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Add Service\n                    </div>\n                </div>\n            </div>\n            <hr style="margin-top: 0px">\n        </ion-card-header>\n        <ion-card-content>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Category</label>\n                        <ion-select [(ngModel)]="service.service" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n                            <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n\n                        </ion-select>\n\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Speciality</label>\n                        <ion-select [(ngModel)]="service.speciality" class="form-control round " style="max-width:100%">\n                            <ion-option *ngFor="let category of sub_categories" value="{{category.name}}">{{category.name}}</ion-option>\n\n                        </ion-select>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Location</label>\n                        <ion-select [(ngModel)]="service.location" class="form-control round " style="max-width:100%">\n                            <ion-option *ngFor="let addr of addresses;let j=index" value="{{j}}">{{addr.name}}</ion-option>\n\n                        </ion-select>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Service Radius</label>\n                        <ion-select [(ngModel)]="service.serverRadius" class="form-control round " style="max-width:100%">\n                            <ion-option *ngFor="let radius of service_radius" value="{{radius}}">{{radius}}</ion-option>\n\n                        </ion-select>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Price</label>\n                        <div>\n                            <div class="inner-addon left-addon">\n\n                                <i class="fa fa-usd" aria-hidden="true" color="grey"></i>\n                                <input type="number" min="0.00" max="10000.00" step="0.01" [(ngModel)]="service.amount" class="form-control round">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="footer text-center" (click)="addService(service)" *ngIf="!service.index">\n                Save\n            </div>\n            <div class="footer text-center" (click)="saveUpdatedService(service)" *ngIf="service.index">\n                Edit\n            </div>\n            <div class="footer text-center danger" *ngIf="service.index" (click)="removeService(service.index)" style="margin-top:10px;background:#f44336 !important">\n                Remove\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <!-- services popup end -->\n\n    <div id="backdrop" [hidden]="profilePage">\n        <div color="danger" style="padding: 15px;\n            margin-bottom: 20px;\n            border: 1px solid transparent;\n            border-radius: 4px;\n            background:#a94442;\n            color:#fff\n        " [hidden]="verified">Sorry, your profile has been disabled.</div>\n        <ion-card style="padding:0px;width:100%;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                                Profile\n\n                                <img (click)="uploadProfilePic()" [hidden]="!verified" class="img-circle profile_pic" [src]="DomSanitizer.bypassSecurityTrustUrl(profile_pic)">\n\n                                <!--<input type="file" id="BtnBrowseHidden" accept="image/*" (change)="profileImageChange($event)" #image hidden>-->\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="row row-bottom" style="width:100% ">\n\n                    <div class="row">\n\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">First Name</label>\n                            <div>\n                                <input class="form-control round" [disabled]="!verified" type="text" name="firstName" [(ngModel)]="model.partnerFirstName" (keyup)="checkFirstName(model.partnerFirstName)"> {{firstname_error}}\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class="row">\n\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Middle Name</label>\n                            <div>\n                                <input class="form-control round " [disabled]="!verified" type="text" name="middleName" [(ngModel)]="model.partnerMiddleName">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="row">\n\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Last Name</label>\n                            <div>\n                                <input class="form-control round" [disabled]="!verified" type="text" name="lastName" [(ngModel)]="model.partnerLastName" (keyup)="checkLastName(model.partnerLastName)"> {{lastname_error}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Gender</label>\n                            <ion-select [(ngModel)]="model.partnerGender" class="form-control round " style="max-width:100%" [disabled]="!verified">\n                                <ion-option value="male">Male</ion-option>\n                                <ion-option value="female">Female</ion-option>\n                                <ion-option value="transgender">Transgender</ion-option>\n                            </ion-select>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Date Of Birth</label>\n                            <div>\n                                <ion-datetime class="form-control round " [disabled]="!verified" displayFormat="MM/DD/YYYY" [(ngModel)]="model.birthDate"></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Phone Number</label>\n                            <div>\n                                <input class="form-control round " type="tel" name="Email" [disabled]="!verified" [(ngModel)]="model.partnerPhone" (keyup)="checkPhone(model.partnerPhone)"> {{phone_error}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Email Address</label>\n                            <div>\n                                <input class="form-control round" [disabled]="!verified" type="email" name="Email" [(ngModel)]="model.partnerEmail" (keyup)="checkEmail(model.partnerEmail)"> {{email_error}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                                Address\n\n                                <ion-icon ios="ios-add" md="md-add" class="pull-right" [hidden]="!verified" (click)="showAddress()" style="font-size:20px;font-weight: bolder;margin-right: 10px;margin-top:0px"></ion-icon>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content style="height:150px;overflow:auto">\n                <ion-list>\n                    <ul class="list-inline">\n                        <li class="list-inline-item bold" *ngFor="let item_address of addresses; let i = index">\n\n                            {{item_address.name}}\n                            <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="showUpdateAddress();updateAddress(i+1,item_address)"></ion-icon>\n                        </li>\n                    </ul>\n\n                </ion-list>\n\n\n            </ion-card-content>\n        </ion-card>\n        <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card" [hidden]="!verified" *ngIf="backgroundCheck && backgroundCheck.Results">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                                Services\n                                <ion-icon ios="ios-add" (click)="showService()" md="md-add" class="pull-right" style="font-size: 20px;font-weight: bolder;margin-right: 10px;margin-top:0px"></ion-icon>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content style="height:150px;overflow:auto">\n\n                <ion-list>\n                    <ul class="list-inline">\n                        <li class="list-inline-item bold" *ngFor="let item_address of services; let i = index" [hidden]="item_address.status">\n                            <span>{{item_address.service}}</span>\n                            <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="showUpdateServiceCard();updateService(i,item_address)"></ion-icon>\n                        </li>\n                    </ul>\n\n                </ion-list>\n\n\n            </ion-card-content>\n        </ion-card>\n        <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -16px;">\n                                Upload Your Certificate\n\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content style="height:150px;overflow:auto">\n\n                <div class="row row-bottom" style="width:100% ">\n                    <div class="col-xs-12">\n                        <p class="text">Please upload a valid Certificate\n\n                    </div><br><br>\n                    <div class="col-xs-12">\n                        <div class="form-group">\n\n                            <button (click)="accessGallery()" [disabled]="!verified" class="btn round grey-background" style="margin-top:15px">Upload</button>\n\n                            <span class="text" style="position:absolute;padding:20px">{{file_name}}</span>\n\n                        </div>\n\n                    </div>\n\n\n\n                </div>\n\n\n            </ion-card-content>\n        </ion-card>\n\n\n        <div [hidden]="isStripeActivated || !verified" *ngIf="backgroundCheck && backgroundCheck.Results" text-center class="footer" (click)="connectStripe()" style="width:100%;margin-top:10px;background: #2fbbff;border-radius: 6px;">\n\n            Add Direct Deposit\n\n        </div>\n        <div [hidden]="!isStripeActivated ||  !verified" *ngIf="backgroundCheck && backgroundCheck.Results" text-center class="footer" (click)="openPaymentsDashBoard()" style="width:100%;margin-top:10px;background: #2fbbff;border-radius: 6px;">\n\n            Payments Dashboard\n\n        </div>\n\n\n        <div text-center class="footer" *ngIf="backgroundCheck && backgroundCheck.Results" (click)="saveProfile()" style="width:100%;margin-top:10px;background: #27ae60;border-radius: 6px;">\n\n            Update Profile\n\n        </div>\n\n        <div text-center class="footer" *ngIf="backgroundCheck && !backgroundCheck.Results" (click)="completeRegistration()" style="width:100%;margin-top:10px;background: #27ae60;border-radius: 6px;">\n\n            Complete Registration\n\n        </div>\n\n    </div>\n\n\n\n\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_11__providers_background_verify_background_verify__["a" /* BackgroundVerifyProvider */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toggle_toggle__["a" /* ToggleProvider */]])
    ], ProfilePage);
    return ProfilePage;
    var ProfilePage_1;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bookings/bookings.module": [
		477,
		8
	],
	"../pages/login/login.module": [
		478,
		7
	],
	"../pages/notifications/notifications.module": [
		470,
		6
	],
	"../pages/partner/partner.module": [
		471,
		5
	],
	"../pages/payments/payments.module": [
		472,
		4
	],
	"../pages/profile/profile.module": [
		473,
		3
	],
	"../pages/register/register.module": [
		475,
		2
	],
	"../pages/signup/signup.module": [
		474,
		1
	],
	"../pages/start/start.module": [
		476,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 206;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Notifications Service/Provider
 * @author Phani Mahesh Birudukota
 */
var NotificationsProvider = (function () {
    function NotificationsProvider(db) {
        this.db = db;
    }
    NotificationsProvider.prototype.getInAppNotificationsByUid = function (uid) {
        return this.db.list('/notification', function (ref) { return ref.orderByChild('uid').equalTo(uid); });
    };
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PartnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartnerPage = (function () {
    function PartnerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PartnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartnerPage');
    };
    PartnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partner',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/partner/partner.html"*/`<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>partner</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/partner/partner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PartnerPage);
    return PartnerPage;
}());

//# sourceMappingURL=partner.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage loaded');
    };
    SignupPage.prototype.OnInit = function () {
        this.data = {};
    };
    SignupPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/signup/signup.html"*/`<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="light-blue">\n    <ion-title text-center>Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n   <button ion-button full round  (click)="gmail()">Sign In to Gamil</button>\n  <button ion-button full round  (click)="facebook()">Sign In to Facebook</button>\n      \n	   <!-- input box start-->\n	    <form>\n		 <ion-item>\n    <ion-label floating>Name</ion-label>\n    <ion-input type="text"  name="username"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label floating>EmailId</ion-label>\n    <ion-input type="email"   name="emailId"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password"   name="password"></ion-input>\n  </ion-item>\n  \n	 \n  \n        </form>\n  </ion-content>\n<ion-footer>\n   \n     <ion-navbar color="black">\n    <ion-title text-center>\n	Aleady Had Account? <a (click)="signin()">Signin Here</a>\n</ion-title>\n  </ion-navbar>\n</ion-footer>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(325);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_start_start__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bookings_bookings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payments_payments__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_partner_partner__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_register_register__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_notifications_notifications__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_bookings_bookings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_background_verify_background_verify__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_toggle_toggle__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// Import the AF2 Module












// AF2 DEV Settings
var firebaseConfig = {
    apiKey: "AIzaSyAZUbCr5oI9z0o89MtaU5urznlGsx5jujg",
    authDomain: "mobilestyler-prod.firebaseapp.com",
    databaseURL: "https://mobilestyler-prod.firebaseio.com",
    projectId: "mobilestyler-prod",
    storageBucket: "mobilestyler-prod.appspot.com",
    messagingSenderId: "896950829266"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partner/partner.module#PartnerPageModule', name: 'PartnerPage', segment: 'partner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/start/start.module#StartPageModule', name: 'StartPage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookings/bookings.module#BookingsPageModule', name: 'BookingsPage', segment: 'bookings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bookings_bookings__["a" /* BookingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payments_payments__["a" /* PaymentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_partner_partner__["a" /* PartnerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_bookings_bookings__["a" /* BookingsProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_30__providers_background_verify_background_verify__["a" /* BackgroundVerifyProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_toggle_toggle__["a" /* ToggleProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Authorization Service/Provider
 * @author Phani Mahesh Birudukota
 */
var AuthProvider = (function () {
    function AuthProvider(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    // get current user data from firebase
    AuthProvider.prototype.getUserData = function () {
        return this.afAuth.auth.currentUser;
    };
    AuthProvider.prototype.login = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.register = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (authData) {
                // set up initial data
                localStorage.setItem('uid', authData.uid);
                _this.updateUserProfile(authData);
                observer.next();
            }).catch(function (error) {
                if (error) {
                    observer.error(error);
                }
            });
        });
    };
    // update user display name and photo
    AuthProvider.prototype.updateUserProfile = function (user) {
        var name = user.name ? user.name : user.email;
        var photoUrl = user.photoURL;
        this.getUserData().updateProfile({
            displayName: name,
            photoURL: photoUrl
        });
        // create or update passenger
        this.db.object('partners/' + user.uid).update({
            name: name,
            photoURL: photoUrl,
            email: user.email,
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.signoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = (function () {
    function ProfileProvider(db) {
        this.db = db;
        console.log('Hello Bookings Provider');
    }
    ProfileProvider.prototype.getProfileData = function (uid) {
        return this.db.list('/partner', function (ref) { return ref.orderByChild('uid').equalTo(uid); }).valueChanges();
    };
    ProfileProvider.prototype.getProfileDataKeys = function (uid) {
        return this.db.list('/partner', function (ref) { return ref.orderByChild('uid').equalTo(uid); }).snapshotChanges();
    };
    ProfileProvider.prototype.getProfileServices = function (uid) {
        console.log('services');
        return this.db.list('/service', function (ref) { return ref.orderByChild('puid').equalTo(uid); }).valueChanges();
    };
    ProfileProvider.prototype.getProfileServicesKeys = function (uid) {
        console.log('services');
        return this.db.list('/service', function (ref) { return ref.orderByChild('puid').equalTo(uid); }).snapshotChanges();
    };
    ProfileProvider.prototype.registerUser = function (json) {
        //alert('entered')
        var partner_profile = {
            'partnerEmail': json.partnerEmail,
            'uid': json.uid,
            'isBackgroundClean': json.isBackgroundClean,
            'backgroundCheck': {
                'registration': false
            }
        };
        console.log(partner_profile);
        return this.db.list('/partner').push(partner_profile);
    };
    ProfileProvider.prototype.saveProfile = function (json) {
        console.log(json);
        if (!json.address) {
            json.address = [];
        }
        if (!json.createdAt) {
            json.createdAt = '';
        }
        if (!json.partnerEmail) {
            json.partnerEmail = '';
        }
        if (!json.partnerGender) {
            json.partnerGender = '';
        }
        if (!json.idCard) {
            json.idCard = '';
        }
        if (!json.partnerFirstName) {
            json.partnerFirstName = '';
        }
        if (!json.partnerLastName) {
            json.partnerLastName = '';
        }
        if (!json.profilePicture) {
            json.profilePicture = '';
        }
        if (!json.partnerPhone) {
            json.profilePicture = '';
        }
        var partner_profile = {
            'addresses': json.address,
            'createdAt': json.createdAt,
            'partnerEmail': json.partnerEmail,
            'partnerGender': json.partnerGender,
            'idCard': json.idCard,
            'partnerFirstName': json.partnerFirstName,
            'partnerLastName': json.partnerLastName,
            'profilePicture': json.profilePicture,
            'partnerPhone': json.partnerPhone,
            'uid': json.puid,
            'backgroundCheck': ''
        };
        if (json.backgroundCheck) {
            partner_profile.backgroundCheck = json.backgroundCheck;
        }
        if (json.services)
            var services = json.services;
        else {
            services = [];
        }
        console.log(services.length);
        for (var i = 0; i < services.length; i++) {
            var profileData = json;
            delete profileData.services;
            delete profileData.idCard;
            delete profileData.partnerPhone;
            delete profileData.password;
            delete profileData.address;
            /*adding address to service object */
            profileData.location = services[i].location;
            profileData.service = services[i].service;
            profileData.speciality = services[i].speciality;
            profileData.serverRadius = services[i].serverRadius;
            profileData.amount = services[i].amount;
            profileData.profileStatus = localStorage.getItem('toggle');
            console.log(profileData);
            var profile = this.db.list('/service');
            profile.push(profileData);
        }
        return this.db.list('/partner').push(partner_profile);
    };
    ProfileProvider.prototype.updateProfile = function (arr1, json) {
        if (!json.address) {
            json.address = [];
        }
        if (!json.createdAt) {
            json.createdAt = '';
        }
        if (!json.partnerEmail) {
            json.partnerEmail = '';
        }
        if (!json.partnerGender) {
            json.partnerGender = '';
        }
        if (!json.idCard) {
            json.idCard = '';
        }
        if (!json.partnerFirstName) {
            json.partnerFirstName = '';
        }
        if (!json.partnerLastName) {
            json.partnerLastName = '';
        }
        if (!json.profilePicture) {
            json.profilePicture = '';
        }
        if (!json.partnerPhone) {
            json.partnerPhone = '';
        }
        if (!json.isBackgroundClean) {
            json.isBackgroundClean = false;
        }
        var partner_profile = {
            'addresses': json.address,
            'createdAt': json.createdAt,
            'partnerEmail': json.partnerEmail,
            'partnerGender': json.partnerGender,
            'idCard': json.idCard,
            'partnerFirstName': json.partnerFirstName,
            'partnerMiddleName': '',
            'partnerLastName': json.partnerLastName,
            'profilePicture': json.profilePicture,
            'partnerPhone': json.partnerPhone,
            'uid': json.puid,
            'isBackgroundClean': json.isBackgroundClean,
            'updatedAt': new Date().toISOString(),
            'backgroundCheck': {},
            'status': ''
        };
        if (json.backgroundCheck) {
            partner_profile.backgroundCheck = json.backgroundCheck;
        }
        if (json.partnerMiddleName) {
            partner_profile.partnerMiddleName = json.partnerMiddleName;
        }
        if (localStorage.getItem('toggle') != null)
            partner_profile.status = localStorage.getItem('toggle');
        if (json.services)
            var services = json.services;
        else {
            services = [];
        }
        console.log(services);
        console.log(services.length);
        for (var i = 0; i < services.length; i++) {
            console.log(services[i]);
            if (services[i].key && services[i].status) {
                var profile = this.db.list('/service');
                console.log("remove" + services[i].key);
                profile.remove(services[i].key);
            }
            else {
                if (services[i].key) {
                    var profileData = json;
                    delete profileData.services;
                    delete profileData.idCard;
                    delete profileData.radius;
                    delete profileData.address;
                    delete profileData.isBackgroundClean;
                    delete profileData.backgroundCheck;
                    profileData.profileStatus = localStorage.getItem('toggle');
                    profileData.location = services[i].location;
                    profileData.service = services[i].service;
                    profileData.speciality = services[i].speciality;
                    if ((services[i].serverRadius))
                        profileData.serverRadius = services[i].serverRadius;
                    else
                        profileData.serverRadius = services[i].radius;
                    profileData.amount = services[i].amount;
                    console.log(profileData);
                    var profile = this.db.list('/service');
                    console.log("updated" + services[i].key);
                    profile.update(services[i].key, profileData);
                }
                else if (!services[i].status) {
                    profileData = json;
                    delete profileData.services;
                    delete profileData.idCard;
                    delete profileData.radius;
                    delete profileData.address;
                    delete profileData.isBackgroundClean;
                    delete profileData.backgroundCheck;
                    profileData.profileStatus = localStorage.getItem('toggle');
                    profileData.location = services[i].location;
                    profileData.service = services[i].service;
                    profileData.speciality = services[i].speciality;
                    if ((services[i].serverRadius))
                        profileData.serverRadius = services[i].serverRadius;
                    else
                        profileData.serverRadius = services[i].radius;
                    profileData.amount = services[i].amount;
                    console.log(profileData);
                    var profile = this.db.list('/service');
                    profile.push(profileData);
                    console.log("crated" + i);
                }
            }
        }
        return this.db.list('/partner').update(arr1[0].key, partner_profile);
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_bookings_bookings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_start_start__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payments_payments__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_profile_profile__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, inAppBrowser, _auth, alertCtrl, profileService, fcm) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.inAppBrowser = inAppBrowser;
        this._auth = _auth;
        this.alertCtrl = alertCtrl;
        this.profileService = profileService;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */];
        this.enable = true;
        if (localStorage.getItem('uid')) {
            this.enable = false;
        }
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_bookings_bookings__["a" /* BookingsPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Payments', component: __WEBPACK_IMPORTED_MODULE_8__pages_payments_payments__["a" /* PaymentsPage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.fcm.subscribeToTopic('partners');
            _this.fcm.subscribeToTopic('broadcast');
            _this.fcm.getToken().then(function (token) {
                // backend.registerToken(token);
            });
            _this.fcm.onNotification().subscribe(function (data) {
                alert(data.aps.alert.body);
                if (data.wasTapped) {
                    console.info("Received in background");
                }
                else {
                    console.info("Received in foreground");
                }
                ;
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                // backend.registerToken(token);
            });
        });
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        this._auth.signoutUser().then(function (res) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */]);
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(this.pages[page].component);
        this.closeMenu();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/app/app.html"*/`<ion-menu [content]="content" color="grey">\n    <ion-header color="grey">\n        <ion-toolbar color="grey">\n            <ion-title>Menu</ion-title>\n\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content class="grey-background">\n        <ion-list class="grey-background">\n            <p class="menu-item" (click)="openPage(0)">Home</p>\n            <p class="menu-item" (click)="openPage(1)">Profile</p>\n            <p class="menu-item" (click)="openPage(3)">Notifications</p>\n            <p class="menu-item" (click)="signOut()">Logout</p>\n\n            <!--<p class="menu-item" (click)="openPage(4)">Register</p>-->\n\n        </ion-list>\n        <p class="menu-item footer-item">\n            <img src="assets/ms-logo.png" style="width:60%"></p>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_13__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookings_bookings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, afDatabase, loadingCtrl, bookingService) {
        this.navCtrl = navCtrl;
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.bookingService = bookingService;
        this.list1 = [];
        this.dbKeys = [];
        var loading = this.loadingCtrl.create({
            content: 'Fetching Data Please Wait...'
        });
        /*loading.present();
        
          var keys=bookingService.getAllKeys(localStorage.getItem('uid'))
          keys.subscribe(queriedItems => {
            
            for(let i=0;i<queriedItems.length;i++)  {
              this.dbKeys.push(queriedItems[i]);
            }
            console.log(this.dbKeys)
          });
      
          var bookings=bookingService.getAllBookings(localStorage.getItem('uid'))
          bookings.subscribe(bookedData => {
            
         this.list1=bookedData;
         this.list2=bookedData;
         loading.dismiss();
          });
      
          
          //book.push({'test':'test'})
          //book.update('-L2aN0csaMN_VfVVLR2C',{'test':'testing'})
        
          this.pet='puppies';*/ /*loading.present();
    
        var keys=bookingService.getAllKeys(localStorage.getItem('uid'))
        keys.subscribe(queriedItems => {
    
          for(let i=0;i<queriedItems.length;i++)  {
            this.dbKeys.push(queriedItems[i]);
          }
          console.log(this.dbKeys)
        });
    
        var bookings=bookingService.getAllBookings(localStorage.getItem('uid'))
        bookings.subscribe(bookedData => {
    
       this.list1=bookedData;
       this.list2=bookedData;
       loading.dismiss();
        });
    
    
        //book.push({'test':'test'})
        //book.update('-L2aN0csaMN_VfVVLR2C',{'test':'testing'})
    
        this.pet='puppies';*/
    }
    HomePage.prototype.getItems = function () {
        return this.list1.filter(function (item) { return item.stage == 'pending'; });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/home/home.html"*/`<ion-header color="grey">\n    <ion-navbar color="grey">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-toggle color="energized"></ion-toggle>\n        <ion-buttons end>\n\n        </ion-buttons>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n    <ion-toggle color="energized"></ion-toggle>\n    <ion-item>\n        <ion-label>Sam</ion-label>\n        <ion-toggle color="energized"></ion-toggle>\n    </ion-item>\n    <div id="partner_accept" class="modal fade" role="dialog">\n        <div class="modal-dialog">\n            <div class="modal-content">\n                <div class="modal-header">\n                    <ion-icon ios="ios-close" md="md-close" class="pull-right" data-dismiss="modal"></ion-icon>\n                </div>\n                <div class="modal-body">\n                    <div class="container text-left">\n                        <div class="pull-right text-right">\n                            <p class="text bolder no-margin" style="margin-top:20px">2.30 PM-3.30 PM</p>\n                            <p class="text no-margin">12/15/2017</p>\n                        </div>\n                        <h4 class="text bolder">Manicure</h4>\n\n                        <p class="text text-left" style="margin:0px;margin-top:60px">\n                            John Doe<br> 1234 Passaic Ave,Harrison, NJ 07029\n                        </p>\n                        <p class="text text-left" style="margin:0px;margin-top:60px">\n                            <span class="font-weight-bold">Note</span><br> This is text\n                        </p>\n                        <div class="pull-right control-buttons" style="margin-top:60px">\n                            <button type="button" class="btn bt-default round grey-background control-button">Accept</button>\n                            <button type="button" class="btn bt-default round control-button" style="margin-left:10px;background: #F44336;color:#fff">Decline</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div style="background:#fff;padding-top:10px" class="rounded-card">\n        <ion-segment [(ngModel)]="pet" color="grey" style="font-weight:bold" class="rounded-card">\n            <ion-segment-button value="kittens" class="tabtext">\n                Upcoming\n            </ion-segment-button>\n            <ion-segment-button value="puppies" class="tabtext">\n                History\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n    <div [ngSwitch]="pet" style="margin-top:10px">\n        <ion-list *ngSwitchCase="\'puppies\'">\n            <ion-item class="no-padding rounded-card" *ngFor="let item of list1" style="margin-bottom:5px">\n                <div class="container text-left">\n                    <div class="pull-right">\n                        <h4 class="text bolder">{{item.time}}</h4>\n                        <h5 class="text">{{item.date}}</h5>\n                    </div>\n                    <h4 class="text bolder">{{item.service_name}}</h4>\n                    <br>\n                    <p class="text text-left">\n                        <span>{{item.name}}</span><br><span> {{item.address}}</span>\n                    </p>\n                    <div class="pull-right control-buttons">\n\n                        <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" class="btn bt-default round grey-background control-button" style="margin-left:10px" color="grey">Details</button>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'kittens\'">\n            <ion-item class="no-padding" *ngFor="let item of list2" style="margin-bottom:5px">\n                <div class="container text-left">\n                    <div class="pull-right">\n                        <h4 class="text bolder">{{item.time}}</h4>\n                        <h5 class="text">{{item.date}}</h5>\n                    </div>\n                    <h4 class="text bolder">{{item.service_name}}</h4>\n                    <br>\n                    <p class="text text-left">\n                        <span>{{item.name}}</span><br><span> {{item.address}}</span>\n                    </p>\n                    <div class="pull-right control-buttons">\n\n                        <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" class="btn bt-default round grey-background control-button" style="margin-left:10px" color="grey">Details</button>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_bookings_bookings__["a" /* BookingsProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ToggleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToggleProvider = (function () {
    function ToggleProvider(http, db) {
        this.http = http;
        this.db = db;
        console.log('Hello ToggleProvider Provider');
    }
    ToggleProvider.prototype.getProfileData = function (uid) {
        return this.db.list('/partner', function (ref) { return ref.orderByChild('uid').equalTo(uid); }).valueChanges();
    };
    ToggleProvider.prototype.getProfileDataKeys = function (uid) {
        return this.db.list('/partner', function (ref) { return ref.orderByChild('uid').equalTo(uid); }).snapshotChanges();
    };
    ToggleProvider.prototype.updateProfileStatus = function (key, data, status) {
        data.status = status;
        this.db.list('/partner').update(key, data);
    };
    ToggleProvider.prototype.toggle = function (value) {
        var _this = this;
        var json = {};
        localStorage.setItem('toggleValue', value);
        if (value)
            localStorage.setItem('toggle', 'active');
        else
            localStorage.setItem('toggle', 'inactive');
        this.getProfileData(localStorage.getItem('uid')).subscribe(function (ref) {
            json = ref[0];
            _this.getProfileDataKeys(localStorage.getItem('uid')).subscribe(function (ref) { return _this.updateProfileStatus(ref[0].key, json, localStorage.getItem('toggle')); });
        });
    };
    ToggleProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ToggleProvider);
    return ToggleProvider;
}());

//# sourceMappingURL=toggle.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bookings_bookings__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_toggle_toggle__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, navParams, authService, alertCtrl, profileService, db, toggleService, loadingCtrl, fb) {
        this.nav = nav;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.profileService = profileService;
        this.db = db;
        this.toggleService = toggleService;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.loginPage = false;
        this.forgotPage = true;
        this.registerPage = true;
        this.rForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email],
            'password': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            'validate': ''
        });
        this.registrationForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email],
            'password': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required],
            'confirmPassword': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]
        });
        this.forgotForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].email]
        });
        this.loginPage = false;
        this.forgotPage = true;
        this.registerPage = true;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.showForgot = function () {
        this.loginPage = true;
        this.forgotPage = false;
    };
    LoginPage.prototype.showLogin = function () {
        this.loginPage = !this.loginPage;
        this.forgotPage = !this.forgotPage;
    };
    LoginPage.prototype.showRegister = function () {
        this.loginPage = !this.loginPage;
        this.registerPage = !this.registerPage;
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.email || !this.password) {
            var alert_1 = this.alertCtrl.create({
                message: 'Please provide email and password',
                buttons: ['OK']
            });
            return alert_1.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.login(this.email, this.password).then(function (authData) {
            localStorage.setItem('uid', authData.uid);
            localStorage.setItem('toggleValue', 'true');
            _this.toggleService.toggle(1);
            loading.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__bookings_bookings__["a" /* BookingsPage */]);
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
        //this.nav.setRoot(HomePage);
    };
    // go to register page
    LoginPage.prototype.register = function () {
        var _this = this;
        if (!this.email || !this.password || !this.confirmPassword) {
            var alert_2 = this.alertCtrl.create({
                message: 'Please provide an email and password',
                buttons: ['OK']
            });
            return alert_2.present();
        }
        if (this.password !== this.confirmPassword) {
            var alert_3 = this.alertCtrl.create({
                message: 'Please confirm the password',
                buttons: ['OK']
            });
            return alert_3.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.register(this.email, this.password).subscribe(function (authData) {
            loading.dismiss();
            var json = {
                'partnerEmail': _this.email,
                'uid': localStorage.getItem('uid'),
                'backgroundCheck': {},
                'isBackgroundClean': false
            };
            _this.profileService.registerUser(json).then(function (ref) {
                console.log(ref);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], { 'auth': authData, 'email': _this.email });
            });
            // this.nav.setRoot(RegisterPage, {'auth':authData,'email':this.email});
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        var _this = this;
        if (!this.email) {
            var alert_4 = this.alertCtrl.create({
                message: 'Please provide the email address',
                buttons: ['OK']
            });
            return alert_4.present();
        }
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.authService.resetPassword(this.email).then(function (res) {
            loading.dismiss();
            _this.nav.setRoot(LoginPage_1);
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                message: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/login/login.html"*/`<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content>\n\n\n\n    <ion-card style="padding:0px;width:100%;height:100% " [hidden]="registerPage">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showRegister()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Registration\n                    </div>\n                </div>\n            </div>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <form [formGroup]="registrationForm">\n                <br>\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label class="control-label">Email Id</label>\n                    <div>\n\n                        <input class="form-control round" id="registerEmail" [(ngModel)]="email" formControlName="email" />\n                        <div class="text" *ngIf="!registrationForm.controls[\'email\'].valid && registrationForm.controls[\'email\'].touched">Please enter a valid email address</div>\n                    </div>\n                </div>\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label class="control-label">Password</label>\n                    <div>\n                        <input type="password" class="form-control round" id="password" [(ngModel)]="password" formControlName="password" />\n                        <div class="text" *ngIf="!registrationForm.controls[\'password\'].valid && registrationForm.controls[\'password\'].touched">Please enter a valid password</div>\n                    </div>\n                </div>\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label class="control-label">Confirm Password</label>\n                    <div>\n                        <input type="password" class="form-control round" id="confirmPassword" [(ngModel)]="confirmPassword" formControlName="confirmPassword" />\n                        <div class="text" *ngIf="!registrationForm.controls[\'confirmPassword\'].valid && registrationForm.controls[\'confirmPassword\'].touched">Please enter the exact password</div>\n                    </div>\n                </div>\n                <br>\n            </form>\n\n        </ion-card-content>\n    </ion-card>\n\n\n    <ion-card style="padding:0px;width:100%;height:100% " [hidden]="forgotPage">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showLogin()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Reset Password\n                    </div>\n                </div>\n            </div>\n            <hr>\n        </ion-card-header>\n        <ion-card-content>\n            <form [formGroup]="forgotForm">\n                <div class="form-group col-sm-12" style="text-align:left">\n                    <label for="resetEmail" class="control-label">Email Id</label>\n                    <div>\n                        <input class="form-control round" id="resetEmail" [(ngModel)]="email" formControlName="email" />\n                        <div class="text" *ngIf="!forgotForm.controls[\'email\'].valid && rForm.controls[\'email\'].touched">Please enter a valid email address</div>\n                    </div>\n                </div>\n            </form>\n        </ion-card-content>\n    </ion-card>\n    <div class="page" [hidden]="loginPage">\n        <div padding class="no-padding-top">\n\n        </div>\n        <hr class="no-margin">\n        <div padding>\n            <form (ngSubmit)="login()" [formGroup]="rForm">\n                <br><br>\n                <div class="form-group col-sm-12">\n                    <label for="emailLogin" class="control-label">Email Id</label>\n                    <div>\n                        <input type="email" class="form-control round" [(ngModel)]="email" id="emailLogin" formControlName="email" style=\'height:50px\' />\n                        <!-- This goes underneath the Name label -->\n                        <div class="text" *ngIf="!rForm.controls[\'email\'].valid && rForm.controls[\'email\'].touched">Please enter the email address</div>\n\n                    </div>\n                </div>\n                <div class="form-group col-sm-12">\n                    <label for="password" class="control-label">Password</label>\n                    <div>\n                        <input type="password" [(ngModel)]="password" formControlName="password" class="form-control round" />\n                        <div class="text" *ngIf="!rForm.controls[\'password\'].valid && rForm.controls[\'password\'].touched">Please enter the password</div>\n                    </div>\n                </div>\n                <br>\n                <div full text-center class="text">\n                    <p (click)="showRegister()">Sign Up as a Cosmetologist</p>\n                    <p (click)="showForgot()">Forgot Password ?</p>\n\n                </div>\n            </form>\n        </div>\n\n\n    </div>\n\n</ion-content>\n\n<ion-footer text-center class="footer" (click)="login()" [hidden]="loginPage">\n\n    Sign In\n\n</ion-footer>\n<ion-footer text-center class="footer" (click)="register()" [hidden]="registerPage">\n\n    Next\n\n</ion-footer>\n<ion-footer text-center class="footer" (click)="forgotPassword()" [hidden]="forgotPage">\n\n    Reset\n\n</ion-footer>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_8__providers_toggle_toggle__["a" /* ToggleProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartPage = (function () {
    function StartPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(false);
        //this.navCtrl.setRoot(LoginPage)
    }
    StartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartPage');
    };
    StartPage.prototype.start = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/start/start.html"*/`<!--\n  Generated template for the StartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content text-center style="overflow:hidden" style="background:black">\n    <div class="position" style="margin-top: 5%">\n        \n        <ion-avatar>\n            <span class="avatar-title">Hair Stylists</span>\n            <img src="assets/4.jpg" class="image">\n        </ion-avatar>\n            \n        \n        <ion-avatar>\n            <span class="avatar-title">Nail Technicians</span>\n            <img src="assets/3.jpg" class="image">\n        </ion-avatar>\n\n        <ion-avatar>\n             <span class="avatar-title">Wax Technicians</span>\n            <img src="assets/1.jpg" class="image">\n        </ion-avatar>\n        \n        <ion-avatar>\n            <span class="avatar-title">Makeup Artists</span>\n            <img src="assets/2.jpg" class="image">\n        </ion-avatar>\n    </div>\n    <div class="bottom-button">\n        <img src="assets/ms-logo.png" style="width:50%">\n        \n        <h5 style="padding-left:10%;padding-right:10%;color:#fff">Earn More With MobileStyler</h5>\n        <button ion-button round color="grey" (click)="start()" style="text-transform:none">Get Started</button>\n    </div>\n\n\n    <video autoplay playsinline muted loop id="video-background" preload="true" style="background:black;opacity:0.6">\n        <source src="assets/welcome_video.mp4">\n    </video>\n\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_background_verify_background_verify__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav, navParams, _auth, alertCtrl, loadingCtrl, fb, http, profileService, inAppBrowser, _authService, camera, DomSanitizer, verifyService) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this._auth = _auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.http = http;
        this.profileService = profileService;
        this.inAppBrowser = inAppBrowser;
        this._authService = _authService;
        this.camera = camera;
        this.DomSanitizer = DomSanitizer;
        this.verifyService = verifyService;
        this.zip_error = '';
        this.address_save = true;
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: '',
            partnerPhone: ''
        };
        this.deposit = {
            account_number: '',
            routing_number: '',
            account_type: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00'
        };
        this.profile_pic = "assets/profile_icon.png";
        this.flag = false;
        this.categories = [];
        this.sub_categories = [];
        this.addresses = [];
        this.services = [];
        this.file_name = '';
        this.profile_editable = true;
        this.deposit_editable = true;
        this.category_data = ["Haircuts", "Color Services", "Hair Treatments", "Hair Styling", "Hands", "Feet"];
        this.sub_category_data = {
            "Haircuts": [
                { "name": "Men's Haircut" },
                { "name": "Women's Haircut" },
                { "name": "Men's Barber" }
            ], "Color Services": [
                {
                    "name": "Retouch"
                },
                {
                    "name": "Highlights/Balayage"
                },
                {
                    "name": "Ombre"
                },
                {
                    "name": "All over coloring "
                },
                {
                    "name": "Color Correction "
                }
            ], "Hair Treatments": [
                {
                    "name": "Deep Conditioning"
                },
                {
                    "name": "Brazilian Blowout"
                },
                {
                    "name": "Keratin"
                },
                {
                    "name": "Perms"
                }
            ], "Hair Styling": [
                {
                    "name": "Blow outs"
                },
                {
                    "name": "Up/Down Dos"
                },
                {
                    "name": "Hair Extensions "
                }
            ], "Hands": [
                {
                    "name": "Manicure"
                },
                {
                    "name": "Acrylic"
                },
                {
                    "name": "Dip Powder"
                },
                {
                    "name": "Gel"
                }
            ], "Feet": [
                {
                    "name": "Basic Pedicure"
                },
                {
                    "name": "Spa Pedicure"
                }
            ], "Makeup Artist": [
                {
                    "name": "Special Occasion"
                },
                {
                    "name": "Bridal"
                }
            ], "Waxing Technician": [
                {
                    "name": "Facial"
                },
                {
                    "name": "Arms"
                },
                {
                    "name": "Legs"
                },
                {
                    "name": "Brazilian"
                },
                {
                    "name": "Back"
                }
            ]
        };
        this.service_radius = [5, 10, 15, 20, 25];
        this.serviceKeys = [];
        this.profileKeys = [];
        this.adressPage = true;
        this.profilePage = false;
        this.servicePage = true;
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        this.model = {
            partnerFirstName: '',
            partnerLastName: '',
            partnerGender: 'male',
            partnerEmail: '',
            partnerPhone: ''
        };
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '0.00',
        };
        this.stripeUrl = 'https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://us-central1-mobilestyler-dev.cloudfunctions.net/stripeConnectCallback&client_id=ca_C43Pb2cbOsFdeelqzwwsJ3xzcSWKxmLv&state=';
        this.stripeRedirectUrl = 'https://us-central1-mobilestyler-dev.cloudfunctions.net/stripeConnectCallback';
        this.stripeDashboard = 'http://us-central1-mobilestyler-dev.cloudfunctions.net/stripeDashboard';
        profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
    }
    RegisterPage_1 = RegisterPage;
    RegisterPage.prototype.accessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            quality: 50
        }).then(function (imageData) {
            console.log(imageData);
            _this.file_src = 'data:image/jpeg;base64,' + imageData;
            _this.file_name = 'Goverment_Id.png';
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.uploadProfilePic = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            quality: 50
        }).then(function (imageData) {
            console.log(imageData);
            _this.profile_pic = 'data:image/jpeg;base64,' + imageData;
            console.log('::::::::::::::ProfilePic:::::::');
            console.log(_this.profile_pic);
        }, function (err) {
            console.log(err);
        });
    };
    RegisterPage.prototype.loadProfileKeys = function (json) {
        this.profileKeys = JSON.parse(JSON.stringify(json));
        this.loading.dismiss();
    };
    RegisterPage.prototype.loadServiceDataKeys = function (json) {
        this.serviceKeys = JSON.parse(JSON.stringify(json));
    };
    RegisterPage.prototype.loadProfileDataOnUI = function (json) {
        console.log(json);
        json = (JSON.parse(JSON.stringify(json)));
        if (json.addresses)
            if (json.addresses.length)
                this.addresses = json.addresses;
        if (json.partnerEmail)
            this.model.partnerEmail = json.partnerEmail;
        if (json.partnerGender)
            this.model.partnerGender = json.partnerGender;
        if (json.partnerFirstName)
            this.model.partnerFirstName = json.partnerFirstName;
        if (json.partnerLastName)
            this.model.partnerLastName = json.partnerLastName;
        if (json.profilePicture)
            this.profile_pic = json.profilePicture;
        if (json.partnerPhone)
            this.model.partnerPhone = json.partnerPhone;
        if (json.idCard.name)
            this.file_name = json.idCard.name;
        if (json.idCard.picture)
            this.file_src = json.idCard.picture;
        if (json.createdAt)
            this.createdAt = json.createdAt;
        if (json.stripe.isStripeActivated)
            this.isStripeActivated = json.stripe.isStripeActivated;
        if (json.stripe.stripeAccountId)
            this.stripeAccountId = json.stripe.stripeAccountId;
    };
    RegisterPage.prototype.loadServiceData = function (json) {
        console.log(json);
        this.services = [];
        json = JSON.parse(JSON.stringify(json));
        for (var i = 0; i < json.length; i++) {
            this.services[i] = json[i];
            this.services[i].key = this.serviceKeys[i].key;
            if (json[i].status)
                this.services[i].status = json[i].status;
            else
                this.services[i].status = false;
            if (json[i].service == "") {
                this.services[i].status = true;
            }
        }
    };
    /* functions to handle address data */
    RegisterPage.prototype.validateAddress = function (address) {
        this.name_error = '';
        this.address_error = '';
        this.address2_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        var addressPattern = new RegExp("/^s*S+(?:s+S+){2}/");
        var zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
        var valid = 1;
        if (!(namePattern.test(address.name))) {
            this.name_error = 'enter valid name without spaces';
            valid = 0;
        }
        /*if(!(addressPattern.test(address.address1))){
         this.address_error='enter valid address';
         valid=0;
         }
         if(!(addressPattern.test(address.address2))){
         this.address2_error='enter valid address';
         valid=0;
         }*/
        return valid;
    };
    RegisterPage.prototype.checkFirstName = function (name) {
        this.firstname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.firstname_error = 'Please enter a valid First Name';
        }
    };
    RegisterPage.prototype.checkLastName = function (name) {
        this.lastname_error = '';
        var namePattern = new RegExp("^[a-zA-Z][a-zA-Z\\s]+$");
        if (!(namePattern.test(name))) {
            this.lastname_error = 'Please enter a valid Last Name';
        }
    };
    RegisterPage.prototype.checkEmail = function (email) {
        this.email_error = '';
        var emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
        if (!(emailPattern.test(email))) {
            this.email_error = 'Please enter a valid Email';
        }
    };
    RegisterPage.prototype.checkPhone = function (phone) {
        var phonePattern = new RegExp("^\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*$");
        this.phone_error = '';
        if (!(phone.length == 10)) {
            this.phone_error = 'Please enter a valid Phone Number';
        }
    };
    RegisterPage.prototype.addAddress = function (addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
            geofire: false,
            status: false
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_1 = arrayOfKeys; _i < arrayOfKeys_1.length; _i++) {
            var obj = arrayOfKeys_1[_i];
            if (obj == 'address2' || obj == 'geofire' || obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "" || json[obj].length < 2) {
                error = true;
                this.loadError("Please provide a valid " + obj);
                break;
            }
        }
        if (this.validateAddress(addressData)) {
            if (!error) {
                this.addresses.push(json);
                //this.save();
                this.showAddress();
            }
        }
    };
    RegisterPage.prototype.showAddress = function () {
        this.address.index = null;
        this.address.name = "";
        this.address.address1 = "";
        this.address.address2 = "";
        this.address.city = "";
        this.address.state = "";
        this.address.zip = "";
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    RegisterPage.prototype.showUpdateAddress = function () {
        this.adressPage = !this.adressPage;
        this.profilePage = !this.profilePage;
    };
    /* get values into popup for edit*/
    RegisterPage.prototype.updateAddress = function (i, addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.address = json;
        this.address.index = i;
    };
    /*store updated address data */
    RegisterPage.prototype.saveUpdatedAddress = function (addressData) {
        var json = {
            name: addressData.name,
            address1: addressData.address1,
            address2: addressData.address2,
            city: addressData.city,
            zip: addressData.zip,
            state: addressData.state,
        };
        this.addresses[addressData.index - 1] = json;
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.showAddress();
        this.save();
    };
    /*remove address from stack*/
    RegisterPage.prototype.removeAddress = function (index) {
        index = index - 1;
        var temp = [];
        for (var j = 0; j < this.addresses.length; j++) {
            if (j != index) {
                var json = {
                    name: this.addresses[j].name,
                    address1: this.addresses[j].address1,
                    address2: this.addresses[j].address2,
                    city: this.addresses[j].city,
                    zip: this.addresses[j].zip,
                    state: this.addresses[j].state
                };
                temp.push(json);
            }
        }
        this.addresses = temp;
        this.showAddress();
        this.save();
    };
    /*functions to handle service data */
    RegisterPage.prototype.saveUpdatedService = function (service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            partnerEmail: this.model.partnerEmail,
            partnerGender: this.model.partnerGender,
            partnerFirstName: this.model.partnerFirstName,
            partnerLastName: this.model.partnerLastName,
            profilePicture: this.profile_pic,
            puid: service.puid
        };
        if (service.key) {
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
            json['updatedAt'] = new Date().toISOString();
        }
        this.services[service.index - 1] = json;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '',
        };
        this.showUpdateServiceCard();
        this.save();
    };
    RegisterPage.prototype.showService = function () {
        this.service.index = null;
        this.service = {
            service: '',
            speciality: '',
            location: '',
            serverRadius: '',
            amount: '0.00'
        };
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    RegisterPage.prototype.showUpdateServiceCard = function () {
        this.servicePage = !this.servicePage;
        this.profilePage = !this.profilePage;
    };
    RegisterPage.prototype.addService = function (service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.addresses[service.location],
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false
        };
        var arrayOfKeys = Object.keys(json);
        var error = false;
        for (var _i = 0, arrayOfKeys_2 = arrayOfKeys; _i < arrayOfKeys_2.length; _i++) {
            var obj = arrayOfKeys_2[_i];
            if (obj == 'status') {
            }
            else if (!(json[obj]) || json[obj] == "") {
                error = true;
                this.loadError("Please provide a valid " + obj);
                break;
            }
        }
        if (!error) {
            this.services.push(json);
            console.log(this.services);
            this.showService();
            this.save();
        }
    };
    RegisterPage.prototype.findAddressIndex = function (name) {
        console.log(this.addresses);
        for (var i = 0; i < this.addresses.length; i++) {
            if (this.addresses[i].name == name) {
                return i;
            }
        }
    };
    RegisterPage.prototype.updateService = function (i, service) {
        var json = {
            service: service.service,
            speciality: service.speciality,
            location: this.findAddressIndex(service.location.name),
            serverRadius: service.serverRadius,
            amount: service.amount,
            status: false,
            puid: service.puid
        };
        if (service.key) {
            json['key'] = service.key;
            json['createdAt'] = service.createdAt;
        }
        this.service = json;
        this.service.index = i + 1;
        this.getSubCategories();
    };
    RegisterPage.prototype.removeService = function (index) {
        index = index - 1;
        this.services[index].status = true;
        this.showService();
        this.save();
    };
    /*normal services */
    RegisterPage.prototype.getSubCategories = function () {
        this.sub_categories = this.sub_category_data[this.service.service];
    };
    RegisterPage.prototype.clearForm = function () {
        this.address = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            state: ''
        };
        this.service = {
            category: '',
            speciality: '',
            location: '',
            radius: '',
            price: '',
        };
    };
    /*function to handle phone number*/
    RegisterPage.prototype.saverange = function ($e, d) {
        if (this.model.phone) {
            var x = this.model.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.model.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    };
    RegisterPage.calculateAge = function (birthday) {
        var today = new Date();
        var birthDate = new Date(birthday);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.model.partnerFirstName == "" || this.model.partnerFirstName == " ") {
            this.loadError('please enter valid firstname');
        }
        else if (this.model.partnerLastName == "" || this.model.partnerLastName == " ") {
            this.loadError('please enter valid lastname');
        }
        else if (this.model.birthDate == "" || this.model.birthDate == " " || !this.model.birthDate) {
            this.loadError('please enter valid date of birth');
        }
        else if (this.addresses.length) {
            var loading_1 = this.loadingCtrl.create({
                content: 'verifying your background'
            });
            loading_1.present();
            var jsonData = {
                credentials: {
                    account_id: "128384",
                    api_key: "MShEcPs9wAEcgd2jDlhMOsAjnw"
                },
                product: "criminal_database",
                data: {
                    FirstName: this.model.partnerFirstName,
                    LastName: this.model.partnerLastName,
                    MiddleName: this.model.partnerMiddleName,
                    Address: this.addresses[0].address1,
                    City: this.addresses[0].city,
                    State: this.addresses[0].state,
                    Zip: this.addresses[0].zip,
                    DOB: this.model.birthDate,
                    AgeMin: RegisterPage_1.calculateAge(this.model.birthDate),
                    AgeMax: 70,
                    Limit: 5,
                    ExactMatch: "no"
                }
            };
            this.verifyService.verify(jsonData).subscribe(function (res) {
                loading_1.dismiss();
                _this.storeData(res);
                // this.storeData(JSON.stringify(res).Results);
            }, function (err) {
                loading_1.dismiss();
                _this.loadError('Sorry something went wrong try again');
            });
        }
        else {
            this.loadError('Please add atleast 1 address');
        }
    };
    RegisterPage.prototype.storeData = function (response) {
        var _this = this;
        var apiResponse = response;
        response = response.Results;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        json.backgroundCheck = apiResponse;
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.puid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        if (1) {
            if (0) {
                this.loadError("Please provide a id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                if (response.Records.length < 1) {
                    json.isBackgroundClean = true;
                }
                else if (response.Recrords[0].Category == "TRAFFIC") {
                    json.isBackgroundClean = true;
                }
                else {
                    json.isBackgroundClean = false;
                }
                console.log(json);
                this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                    _this.loadSuccess(json.isBackgroundClean);
                }, function (reject) {
                    console.log('error while storing data. please try again');
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                        _this.loadError('Something went wrong. Try again');
                    }
                });
            }
        }
    };
    RegisterPage.prototype.save = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'please wait'
        });
        loading.present();
        var d = new Date();
        var n = d.toISOString();
        var json = this.model;
        json.services = this.services;
        json.address = this.addresses;
        json.profilePicture = this.profile_pic;
        json.partnerPhone = this.model.partnerPhone;
        json.isBackgroundClean = false;
        json.idCard = {
            'name': this.file_name,
            'picture': this.file_src
        };
        if (this.file_src == '' || this.file_src == ' ' || !(this.file_src)) {
            delete json.idCard;
        }
        json.createdAt = n;
        json.puid = localStorage.getItem('uid');
        this.flag = false;
        var arrayOfKeys = Object.keys(this.model);
        var error = false;
        /* for(let obj of arrayOfKeys){
         if(!(this.model[obj])){
         error=true;
         this.loadError("please provide "+obj);
         if(loading){
         loading.dismiss();
         loading=null;
         }
         break;
         }
         }*/
        // if(!error){
        if (1) {
            // if(this.file_src=='' || this.file_src==' ' || !(this.file_src)){
            if (0) {
                this.loadError("Please provide a valid id proof");
                if (loading) {
                    loading.dismiss();
                    loading = null;
                }
            }
            else {
                //alert('success')
                console.log(json);
                this.profileService.updateProfile(this.profileKeys, json).then(function (resolve) {
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                    _this.reloadCompleteData();
                }, function (reject) {
                    console.log('error while storing data. please try again');
                    if (loading) {
                        loading.dismiss();
                        loading = null;
                    }
                });
            }
        }
    };
    RegisterPage.prototype.reloadPage = function (loading, ref) {
        this.loadServiceDataKeys(ref);
        if (loading) {
            loading.dismiss();
            loading = null;
        }
    };
    RegisterPage.prototype.reloadCompleteData = function () {
        var _this = this;
        this.profileService.getProfileData(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileDataOnUI(ref[0]); });
        this.profileService.getProfileDataKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadProfileKeys(ref); });
        this.profileService.getProfileServices(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceData(ref); });
        this.profileService.getProfileServicesKeys(localStorage.getItem('uid'))
            .subscribe(function (ref) { return _this.loadServiceDataKeys(ref); });
    };
    RegisterPage.prototype.getCityState = function (zipCode) {
        var _this = this;
        if (zipCode) {
            if (zipCode.length == 5) {
                this.http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + zipCode).subscribe(function (data) {
                    var response = data.json();
                    _this.address.city = response.results[0].address_components[1].long_name;
                    _this.address.state = response.results[0].address_components[3].short_name;
                    _this.zip_error = '';
                });
            }
            else {
                this.zip_error = 'Please enter a valid zip code';
            }
        }
        else {
            this.zip_error = 'Please enter a valid zip code';
        }
    };
    RegisterPage.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Please wait..."; }
        this.loading = this.loadingCtrl.create({
            content: message
        });
    };
    RegisterPage.prototype.loadError = function (message) {
        var alert = this.alertCtrl.create({
            message: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.loadSuccess = function (verify) {
        var _this = this;
        if (verify) {
            var alert_1 = this.alertCtrl.create({
                message: 'Thank you for registering as a Cosmetologist. Please login.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        handler: function (data) {
                            _this.goToLoginPage();
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                message: 'Sorry, Your background check failed. Please contact us.',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        handler: function (data) {
                            _this.goToLoginPage();
                        }
                    }]
            });
            alert_2.present();
        }
    };
    RegisterPage.prototype.goToLoginPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = RegisterPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/register/register.html"*/`<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="grey">\n    <ion-navbar color="grey">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#EDF0F3" padding>\n\n    <ion-card style="padding:0px;width:100%; margin-left: auto; " [hidden]="adressPage">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row" style="padding-top: 10px">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showAddress()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Add Location\n                    </div>\n                </div>\n            </div>\n            <hr style="margin-top: 0px; ">\n        </ion-card-header>\n        <ion-card-content>\n            <div class="row">\n\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Name</label>\n                    <div>\n                        <input class="form-control round " type="text" name="addressName" [(ngModel)]="address.name" (keyup)="validateAddress(address)"> {{name_error}}\n\n                    </div>\n                </div>\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Address Line 1</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address1" (keyup)="validateAddress(address)">{{address_error}}\n                    </div>\n                </div>\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Address Line 2</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.address2" (keyup)="validateAddress(address)">{{address2_error}}\n                    </div>\n                </div>\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-12" style="text-align:left">\n                    <label class="control-label">Zip</label>\n                    <div>\n                        <input class="form-control round " pattern="[0-9]{5}" type="text" name="Email" [(ngModel)]="address.zip" (keyup)="getCityState(address.zip)">\n                    </div>\n                </div>\n\n            </div>\n            <div class="row" style="width:100% ">\n                <div class="form-group col-xs-6" style="text-align:left">\n                    <label class="control-label">City</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.city" readonly>\n                    </div>\n                </div>\n                <div class="form-group col-xs-6" style="text-align:left">\n                    <label class="control-label">State</label>\n                    <div>\n                        <input class="form-control round " type="text" name="Email" [(ngModel)]="address.state" readonly>\n                    </div>\n                </div>\n            </div>\n\n            <div class="footer text-center" (click)="addAddress(address)" *ngIf="!address.index">\n                Save\n            </div>\n            <div class="footer text-center" (click)="saveUpdatedAddress(address)" *ngIf="address.index">\n                Edit\n            </div>\n            <div class="footer text-center danger" *ngIf="address.index" (click)="removeAddress(address.index)" style="margin-top:10px;background:#f44336 !important">\n                Remove\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <!-- services popup -->\n    <ion-card style="padding:0px;width:100%;margin-left: auto" [hidden]="servicePage">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="showUpdateServiceCard()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Add Service\n                    </div>\n                </div>\n            </div>\n            <hr style="margin-top: 0px">\n        </ion-card-header>\n        <ion-card-content>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Category</label>\n                        <ion-select [(ngModel)]="service.service" class="form-control round" (ngModelChange)="getSubCategories()" style="max-width:100%">\n                            <ion-option *ngFor="let category of category_data" value="{{category}}">{{category}}</ion-option>\n\n                        </ion-select>\n\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Speciality</label>\n                        <ion-select [(ngModel)]="service.speciality" class="form-control round " style="max-width:100%">\n                            <ion-option *ngFor="let category of sub_categories" value="{{category.name}}">{{category.name}}</ion-option>\n\n                        </ion-select>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Location</label>\n                        <ion-select [(ngModel)]="service.location" class="form-control round " style="max-width:100%">\n                            <ion-option *ngFor="let addr of addresses;let j=index" value="{{j}}">{{addr.name}}</ion-option>\n\n                        </ion-select>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Service Radius</label>\n                        <ion-select [(ngModel)]="service.serverRadius" class="form-control round " style="max-width:100%">\n                            <ion-option *ngFor="let radius of service_radius" value="{{radius}}">{{radius}}</ion-option>\n\n                        </ion-select>\n                    </div>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-xs-12">\n                    <div class="form-group text-left">\n                        <label class="control-label">Price</label>\n                        <div>\n                            <div class="inner-addon left-addon">\n\n                                <i class="fa fa-usd" aria-hidden="true" color="grey"></i>\n                                <input type="number" min="0.00" max="999.00" step="0.01" [(ngModel)]="service.amount" class="form-control round">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="footer text-center" (click)="addService(service)" *ngIf="!service.index">\n                Save\n            </div>\n            <div class="footer text-center" (click)="saveUpdatedService(service)" *ngIf="service.index">\n                Edit\n            </div>\n            <div class="footer text-center danger" *ngIf="service.index" (click)="removeService(service.index)" style="margin-top:10px;background:#f44336 !important">\n                Remove\n            </div>\n        </ion-card-content>\n    </ion-card>\n    <!-- services popup end -->\n\n    <div id="backdrop" [hidden]="profilePage">\n        <ion-card style="padding:0px;width:100%;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                                Profile\n\n                                <img (click)="uploadProfilePic()" class="img-circle profile_pic" [src]="DomSanitizer.bypassSecurityTrustUrl(profile_pic)">\n\n                                <!--<input type="file" id="BtnBrowseHidden" accept="image/*" (change)="profileImageChange($event)" #image hidden>-->\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content>\n                <div class="row row-bottom" style="width:100% ">\n\n                    <div class="row">\n\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">First Name</label>\n                            <div>\n                                <input class="form-control round " type="text" name="firstName" [(ngModel)]="model.partnerFirstName" (keyup)="checkFirstName(model.partnerFirstName)"> {{firstname_error}}\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class="row">\n\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Middle Name</label>\n                            <div>\n                                <input class="form-control round " type="text" name="middleName" [(ngModel)]="model.partnerMiddleName">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="row">\n\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Last Name</label>\n                            <div>\n                                <input class="form-control round " type="text" name="lastName" [(ngModel)]="model.partnerLastName" (keyup)="checkLastName(model.partnerLastName)"> {{lastname_error}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Gender</label>\n                            <ion-select [(ngModel)]="model.partnerGender" class="form-control round " style="max-width:100%">\n                                <ion-option value="male">Male</ion-option>\n                                <ion-option value="female">Female</ion-option>\n                                <ion-option value="transgender">Transgender</ion-option>\n                            </ion-select>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Date Of Birth</label>\n                            <div>\n                                <ion-datetime class="form-control round " displayFormat="MM/DD/YYYY" [(ngModel)]="model.birthDate"></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Phone Number</label>\n                            <div>\n                                <input class="form-control round " type="tel" name="Email" [(ngModel)]="model.partnerPhone" (keyup)="checkPhone(model.partnerPhone)"> {{phone_error}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="row" style="width:100% ">\n                        <div class="form-group col-xs-12" style="text-align:left">\n                            <label class="control-label">Email Address</label>\n                            <div>\n                                <input class="form-control round " type="email" name="Email" [(ngModel)]="model.partnerEmail" (keyup)="checkEmail(model.partnerEmail)"> {{email_error}}\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                                Address\n\n                                <ion-icon ios="ios-add" md="md-add" class="pull-right" (click)="showAddress()" style="font-size:20px;font-weight: bolder;margin-right: 10px;margin-top:0px"></ion-icon>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content style="height:150px;overflow:auto">\n                <ion-list>\n                    <ul class="list-inline">\n                        <li class="list-inline-item bold" *ngFor="let item_address of addresses; let i = index">\n\n                            {{item_address.name}}\n                            <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="showUpdateAddress();updateAddress(i+1,item_address)"></ion-icon>\n                        </li>\n                    </ul>\n\n                </ion-list>\n\n\n            </ion-card-content>\n        </ion-card>\n        <!--ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -17px;">\n                                Services\n                                <ion-icon ios="ios-add" (click)="showService()" md="md-add" class="pull-right" style="font-size: 20px;font-weight: bolder;margin-right: 10px;margin-top:0px"></ion-icon>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content style="height:150px;overflow:auto">\n\n                <ion-list>\n                    <ul class="list-inline">\n                        <li class="list-inline-item bold" *ngFor="let item_address of services; let i = index" [hidden]="item_address.status">\n                            <span>{{item_address.service}}</span>\n                            <ion-icon ios="ios-close" md="md-close" class="pull-right" (click)="showUpdateServiceCard();updateService(i,item_address)"></ion-icon>\n                        </li>\n                    </ul>\n\n                </ion-list>\n\n\n            </ion-card-content>\n        </ion-card>-->\n        <ion-card style="padding:0px;width:100%;margin-top:10px;margin-left:auto;" class="rounded-card">\n\n            <ion-card-header style="padding:0px">\n\n                <div class="row" style="margin-bottom:5px">\n\n                    <div class="col-xs-12" style="padding:0px">\n                        <div class="row">\n                            <div class="col-xs-12 text" style="text-align:left;padding:0px;font-weight:bold;margin-top: 18px;margin-left: 28px;margin-bottom: -16px;">\n                                Government ID\n\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <hr>\n            </ion-card-header>\n            <ion-card-content style="height:150px;overflow:auto">\n\n                <div class="row row-bottom" style="width:100% ">\n                    <div class="col-xs-12">\n                        <p class="text">Please upload a valid government ID\n\n                    </div><br><br>\n                    <div class="col-xs-12">\n                        <div class="form-group">\n\n                            <button (click)="accessGallery()" class="btn round grey-background" style="margin-top:15px">Upload</button>\n\n                            <span class="text" style="position:absolute;padding:20px">{{file_name}}</span>\n\n                        </div>\n\n                    </div>\n\n\n\n                </div>\n\n\n            </ion-card-content>\n        </ion-card>\n\n\n        <div text-center class="footer" (click)="register()" style="width:100%;margin-top:10px;background: #27ae60;border-radius: 6px;">\n\n            Register\n\n        </div>\n\n\n    </div>\n\n\n\n\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_8__providers_background_verify_background_verify__["a" /* BackgroundVerifyProvider */]])
    ], RegisterPage);
    return RegisterPage;
    var RegisterPage_1;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bookings_bookings__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toggle_toggle__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_menu_controller__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(127);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookingsPage = (function () {
    function BookingsPage(navCtrl, navParams, bookingService, loadingCtrl, authService, menuCtrl, profileService, toggleService, fcm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingService = bookingService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.profileService = profileService;
        this.toggleService = toggleService;
        this.fcm = fcm;
        this.bookings = [];
        this.booking_data = [];
        this.keys = [];
        this.index = 0;
        this.pastBookingsList = [];
        this.upcomingBookingsList = [];
        this.bookingList = false;
        this.bookingPage = true;
        this.menuCtrl.enable(true);
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
        this.fcm.subscribeToTopic(this.authService.getUserData().uid);
        this.bookingsRef = bookingService.getAllBookingsByUid(this.authService.getUserData().uid);
        this.bookings = this.bookingsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.bookings.subscribe(function (ref) { return _this.categorizeBookings(ref); });
        this.loading.dismiss();
        this.pet = 'kittens';
        if (localStorage.getItem('toggleValue') !== null) {
            this.toggleValue = JSON.parse(localStorage.getItem('toggleValue'));
        }
    }
    BookingsPage.prototype.toggle = function (value) {
        this.toggleService.toggle(value);
    };
    BookingsPage.prototype.categorizeBookings = function (bookingsList) {
        console.log(bookingsList);
        this.pastBookingsList = [];
        this.upcomingBookingsList = [];
        for (var i = 0; i < bookingsList.length; i++) {
            if (bookingsList[i].stage.toLowerCase() == 'end' || bookingsList[i].stage.toLowerCase() == 'completed' || bookingsList[i].stage.toLowerCase() == 'reject') {
                var date = new Date(bookingsList[i].bookingSchedule.date);
                console.log(date);
                var day = date.getDate(); //Date of the month: 2 in our example
                var month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
                var year = date.getFullYear(); //Year: 2013
                var hours = date.getHours();
                var Minutes = date.getMinutes();
                var seconds = date.getSeconds();
                bookingsList[i].dates = day + '-' + month + '-' + year;
                bookingsList[i].times = hours + ':' + Minutes + ':' + seconds;
                this.pastBookingsList.push(bookingsList[i]);
            }
            else {
                date = new Date(bookingsList[i].bookingSchedule.date);
                day = date.getDate(); //Date of the month: 2 in our example
                month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
                year = date.getFullYear(); //Year: 2013
                hours = date.getHours();
                Minutes = date.getMinutes();
                seconds = date.getSeconds();
                bookingsList[i].dates = day + '-' + month + '-' + year;
                bookingsList[i].times = hours + ':' + Minutes + ':' + seconds;
                this.upcomingBookingsList.push(bookingsList[i]);
            }
        }
    };
    BookingsPage.prototype.showBookingDetails = function (booking) {
        var date = new Date(booking.bookingSchedule.date);
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        var Minutes = date.getMinutes();
        var seconds = date.getSeconds();
        booking.dates = day + '-' + month + '-' + year;
        booking.times = hours + ':' + Minutes + ':' + seconds;
        this.booking_data = booking;
        this.togglePopUp();
    };
    BookingsPage.prototype.togglePopUp = function () {
        this.bookingList = !this.bookingList;
        this.bookingPage = !this.bookingPage;
    };
    BookingsPage.prototype.updateBooking = function (stage, booking) {
        var _this = this;
        if (this.loading != undefined) {
            this.loading.dismiss();
        }
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present().then(function () {
            _this.bookingService.updateBooking(stage, booking).then(function () {
                if (stage == 'accept' || stage == 'reject')
                    _this.togglePopUp();
                _this.loading.dismiss();
            });
        });
    };
    BookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookings',template:/*ion-inline-start:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/bookings/bookings.html"*/`<!--\n   Generated template for the BookingsPage page.\n\n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header color="grey">\n    <ion-navbar color="grey" style="color:#fff">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n\n        <ion-grid style="float:right;width:190px">\n            <ion-row style="margin-left: 35px">\n                <ion-col col-5 style="padding-top: 15px"> <i style="color:#fff;padding-top:15px" [hidden]="toggleValue">Offline</i> <i style="color:#fff;padding-top:15px" [hidden]="!toggleValue">Online</i></ion-col>\n                <ion-col col-4 style="height: 42px;">\n                    <ion-toggle color="energized" [(ngModel)]="toggleValue" (ionChange)="toggle(toggleValue)"></ion-toggle>\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n\n    </ion-navbar>\n</ion-header>\n<ion-content style="background:#EDF0F3" padding>\n    <ion-card [hidden]="bookingPage" *ngIf="booking_data.bookingSchedule" class="centered">\n\n        <ion-card-header style="padding:8px;padding-bottom:0px;margin-bottom:-10px">\n\n            <div class="row">\n                <div class="col-xs-2">\n                    <ion-icon (click)="togglePopUp()" ios="ios-arrow-dropleft-outline" md="ios-arrow-dropleft-outline" color="grey" style="font-size:25px;font-weight:bold"></ion-icon>\n                </div>\n                <div style="padding:0px">\n                    <div class="row">\n                        Booking Details\n                    </div>\n                </div>\n            </div>\n            <hr style="margin-top:0px; margin-bottom:0px">\n        </ion-card-header>\n        <ion-card-content>\n            <br>\n\n\n\n            <div class="container text-left">\n                <div class="pull-right text-right">\n                    <p class="text bolder no-margin">{{booking_data.bookingSchedule.time}}</p>\n                    <p class="text no-margin">{{booking_data.bookingSchedule.date}}</p>\n                </div>\n                <h4 class="text bolder" *ngFor="let service of booking_data.services">{{service.serviceName}} - {{service.speciality}}<br>\n                </h4>\n\n                <p class="text text-left" style="margin:0px;margin-top:60px">\n                    <span>{{booking_data.customerName}}</span><br>\n                    <span> {{booking_data.customerAddress.address1}}</span><br>\n                    <span> {{booking_data.customerAddress.address2}}</span><br>\n                    <span> {{booking_data.customerAddress.city}},{{booking_data.customerAddress.state}},{{booking_data.customerAddress.zip}}</span>\n                </p>\n\n                <p class="text text-left" style="margin-top:10px">\n                    <span class="font-weight-bold">Notes</span><br> {{booking_data.notes}}\n                </p>\n\n                <p class="text text-left" style="margin:0px;margin-top:30px">\n                    <span class="font-weight-bold">Amount</span><br> {{booking_data.totalAmount}}\n                </p>\n\n                <div class="pull-right control-buttons" style="margin-top:60px" *ngIf="booking_data.stage==\'pending\'">\n                    <button type="button" class="btn bt-default round grey-background control-button" (click)="updateBooking(\'accept\',booking_data);">Accept\n                    </button>\n                    <button type="button" class="btn bt-default round control-button" (click)="updateBooking(\'reject\',booking_data)" style="margin-left:10px;background: #F44336;color:#fff">Decline\n                    </button>\n                </div>\n                <br>\n                <br>\n            </div>\n\n\n        </ion-card-content>\n    </ion-card>\n    <div [hidden]="bookingList">\n        <div style="background:#fff;">\n            <ion-segment [(ngModel)]="pet" color="grey" style="font-weight:bold">\n                <ion-segment-button value="kittens">\n                    Upcoming\n                </ion-segment-button>\n                <ion-segment-button value="puppies">\n                    Past\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n        <div [ngSwitch]="pet" style="margin-top:10px">\n            <ion-list *ngSwitchCase="\'puppies\'">\n                <ion-item *ngIf="pastBookingsList.length<1">\n                    <p>No Past Items Found</p>\n                </ion-item>\n                <ion-item class="no-padding rounded-card" *ngFor="let booking of pastBookingsList ;let i=index" style="margin-bottom:5px">\n                    <div class="container text-left">\n                        <div class="pull-right">\n                            <h4 class="text bolder">{{booking.bookingSchedule.times}}</h4>\n                            <h5 class="text">{{booking.bookingSchedule.dates}}</h5>\n                        </div>\n                        <h4 class="text bolder" *ngFor="let service of booking.services">{{service.serviceName}} - {{service.speciality}}<br>\n                        </h4>\n                        <br>\n                        <h4 class="text bolder">Address</h4>\n                        <p class="text text-left">\n                            <span>{{booking.customerName}}</span><br>\n                            <span> {{booking.customerAddress.address1}}</span><br>\n                            <span>{{booking.customerAddress.address2}}</span><br>\n                            <span>{{booking.customerAddress.city}},{{booking.customerAddress.state}},{{booking.customerAddress.zip}}</span>\n                        </p>\n                        <br>\n\n                        <div class="pull-right control-buttons">\n                            <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" class="btn  outline round  control-button" style="margin-left:10px;background:#fff;color:#6D7993" color="grey">\n                                {{booking.stage}}\n                            </button>\n                            <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" (click)="showBookingDetails(booking)" class="btn bt-default round grey-background control-button" style="margin-left:10px" color="grey">Details\n                            </button>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-list>\n            <ion-list *ngSwitchCase="\'kittens\'">\n                <ion-item *ngIf="upcomingBookingsList.length<1">\n                    <p>No Upcoming Items found</p>\n                </ion-item>\n                <ion-item class="no-padding rounded-card" *ngFor="let booking of upcomingBookingsList;let i=index" style="margin-bottom:5px">\n                    <div class="container text-left">\n                        <div class="pull-right text-right right-time-space">\n                            <h4 class="text bolder">{{booking.times}}</h4>\n                            <h5 class="text">{{booking.dates}}</h5>\n                        </div>\n                        <h4 class="text bolder" *ngFor="let service of booking.services">{{service.serviceName}} - {{service.speciality}}<br>\n                        </h4>\n                        <br>\n                        <p class="text text-left">\n                            <span>{{booking.customerName}}</span><br>\n                            <span> {{booking.customerAddress.address1}}</span><br>\n                            <span>{{booking.customerAddress.address2}}</span><br>\n                            <span>{{booking.customerAddress.city}},{{booking.customerAddress.state}},{{booking.customerAddress.zip}}</span>\n                        </p>\n\n\n                        <div class="pull-left control-buttons" *ngIf="booking.stage!=\'pending\'">\n                            <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" class="btn  outline round  control-button" style="margin-left:10px;background:#fff;color:#6D7993" color="grey">\n                                {{booking.stage}}\n                            </button>\n                            <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" (click)="showBookingDetails(booking)" class="btn bt-default round grey-background control-button" style="margin-left:10px" color="grey">Details\n                            </button>\n\n                        </div>\n                        <div class="pull-right control-buttons">\n\n                            <button type="button" data-toggle="modal" data-backdrop="false" data-target="#partner_accept" (click)="showBookingDetails(booking)" class="btn bt-default round grey-background control-button" style="margin-left:10px" color="grey" *ngIf="booking.stage.toLowerCase()==\'pending\'">Details\n                            </button>\n                            <button type="button" class="btn bt-default round grey-background control-button" style="background: #27ae60" (click)="updateBooking(\'start\',booking);" *ngIf="booking.stage.toLowerCase()==\'accept\'">Start\n                            </button>\n                            <button type="button" class="btn bt-default round control-button" (click)="updateBooking(\'end\',booking)" style="margin-left:10px;background: #F44336;color:#fff" *ngIf="booking.stage.toLowerCase()==\'start\'">Stop\n                            </button>\n                        </div>\n                    </div>\n                </ion-item>\n            </ion-list>\n\n        </div>\n    </div>\n</ion-content>`/*ion-inline-end:"/Users/home/Documents/GitHub/MobileStylerPartner/src/pages/bookings/bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bookings_bookings__["a" /* BookingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_app_menu_controller__["a" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toggle_toggle__["a" /* ToggleProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */]])
    ], BookingsPage);
    return BookingsPage;
}());

//# sourceMappingURL=bookings.js.map

/***/ })

},[305]);
//# sourceMappingURL=main.js.map