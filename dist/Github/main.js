(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/* Body Styling */\nhtml, body{\n    font-family: 'Open Sans', sans-serif;\n    font-size: 100%;\n  \tbackground: #FFf;\n  \tmargin: 0;\n  \tpadding: 0;\n}\nbody a{\n\ttransition:0.5s all;\n\t-webkit-transition:0.5s all;\n\t-moz-transition:0.5s all;\n\t-o-transition:0.5s all;\n\t-ms-transition:0.5s all;\n}\n/* Navbar Styling */\nnav.opaque-navbar{\n    background-color: #fff;\n    border-bottom: 0px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.03);\n    transition: background-color .5s ease 0s;\n    height: 60px;\n}\n.inline{\n    display: inline;\n}\n/* Responsive Styling */\n@media only screen and (max-width: 992px) {\n    li.nav-item.user{\n        position: absolute;\n        right: 120px;\n    }\n    li.nav-item.repo{\n        position: absolute;\n        right: 20px;\n        margin-bottom: 10px;\n    }\n\n} \n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Navigation Bar -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top opaque-navbar\">\n    <a class=\"navbar-brand\" href=\"#\">Github Finder</a>\n    <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button> -->\n    <div class=\" navbar inline\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav links\">\n        <li class=\"nav-item user\">\n          <a class=\"nav-link\" routerLink='/users' routerLinkActive='active'>Users</a>\n        </li>\n        <li class=\"nav-item repo\">\n          <a class=\"nav-link\" routerLink='/repos' routerLinkActive='active'>Repositories</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <script src=\"scripts.js\" type=\"text/javascript\"></script>\n<!-- End of Navigation -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _repos_repos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./repos/repos.component */ "./src/app/repos/repos.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _font_directive_font_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./font-directive/font.directive */ "./src/app/font-directive/font.directive.ts");
/* harmony import */ var _pipe_last_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipe/last.pipe */ "./src/app/pipe/last.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Defining routes
// const routes:Routes=[
//   {path:"users",component:UsersComponent},
//   {path:"repos",component:ReposComponent},
//   {path:"",redirectTo:"/users",pathMatch:"full"},
//   {path:'**',component:NotFoundComponent}
// ]








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                _repos_repos_component__WEBPACK_IMPORTED_MODULE_6__["ReposComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                _font_directive_font_directive__WEBPACK_IMPORTED_MODULE_10__["FontDirective"],
                _pipe_last_pipe__WEBPACK_IMPORTED_MODULE_11__["LastPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_2__["RoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/class/repos.ts":
/*!********************************!*\
  !*** ./src/app/class/repos.ts ***!
  \********************************/
/*! exports provided: Repos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repos", function() { return Repos; });
var Repos = /** @class */ (function () {
    function Repos(name, html_url, description, created_at) {
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.created_at = created_at;
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.created_at = created_at;
    }
    return Repos;
}());



/***/ }),

/***/ "./src/app/class/users.ts":
/*!********************************!*\
  !*** ./src/app/class/users.ts ***!
  \********************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users(login, name, avatar_url, html_url, followers_url, following_url, company, public_repos, hireable, created_at, followers, following) {
        this.login = login;
        this.name = name;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.followers_url = followers_url;
        this.following_url = following_url;
        this.company = company;
        this.public_repos = public_repos;
        this.hireable = hireable;
        this.created_at = created_at;
        this.followers = followers;
        this.following = following;
        this.name = name;
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;
        this.followers_url = followers_url;
        this.following_url = following_url;
        this.company = company;
        this.public_repos = public_repos;
        this.hireable = hireable;
        this.created_at = created_at;
        this.followers = followers;
        this.following = following;
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/font-directive/font.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/font-directive/font.directive.ts ***!
  \**************************************************/
/*! exports provided: FontDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontDirective", function() { return FontDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FontDirective = /** @class */ (function () {
    function FontDirective(elem) {
        this.elem = elem;
    }
    FontDirective.prototype.onmouseenter = function () {
        this.fontChange('Caveat');
    };
    FontDirective.prototype.onmouseleave = function () {
        this.fontChange('Cookie');
    };
    FontDirective.prototype.fontChange = function (action) {
        this.elem.nativeElement.style.fontFamily = 'Great Vibes';
        this.elem.nativeElement.style.fontSize = '30px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FontDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FontDirective.prototype, "onmouseleave", null);
    FontDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFont]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FontDirective);
    return FontDirective;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">\n  Sorry We can't find It.\n</h1>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipe/last.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipe/last.pipe.ts ***!
  \***********************************/
/*! exports provided: LastPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPipe", function() { return LastPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LastPipe = /** @class */ (function () {
    function LastPipe() {
    }
    LastPipe.prototype.transform = function (value) {
        var wordsLength = value.length;
        var getWord = '';
        for (var i = 0; i < wordsLength; i++) {
            if (value.charAt(i) === " ") {
                getWord = '';
            }
            else if (value.charAt(i) !== " ") {
                getWord = getWord + value.charAt(i);
            }
        }
        return getWord;
    };
    LastPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'last'
        })
    ], LastPipe);
    return LastPipe;
}());



/***/ }),

/***/ "./src/app/repos/repos.component.css":
/*!*******************************************!*\
  !*** ./src/app/repos/repos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.wrapper{\n    margin-top: 80px;\n}\ndiv.container-fluid{\n    padding-left: 50px;\n    padding-right: 50px;\n}\nform.form-inline.ng-untouched.ng-pristine.ng-valid{\n        /* float: right; */\n        margin-bottom: 10px;\n}\n.searchtext{\n    padding-top:10px;\n    font-size: 14px;\n    color:#8c8b8b;\n}\nspan.badge{\n    float: right;\n}\ni{\n    padding: 5px;\n}\n.inline{\n    display: inline;\n}\nh4.style2{\n    margin-top: 50px;\n    font-family: 'Great Vibes', cursive; \n    text-align: center;\n    font-size: 36px;\n    color:#0BB6E4;\n}\nhr.style2 { \n    margin-bottom: 60px;\n    border: 1px; \n    height: 1px; \n    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);\n    background: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); \n  }\ndiv.loadMore{\n    text-align: center;\n}\nbutton.loadMore{\n    height: 100px;\n    border-radius: 100px;\n}"

/***/ }),

/***/ "./src/app/repos/repos.component.html":
/*!********************************************!*\
  !*** ./src/app/repos/repos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin of wrapper -->\n<div class=\"wrapper\">\n\n  <div class=\"container-fluid\">\n      <h4 class=\"style2\">Repositories</h4>\n      <hr class=\"style2\">\n      \n      <div class=\"row\">\n\n        <!-- Search input section -->\n        <div class=\"container-fluid search\">\n          \n          <form class=\"form-inline\">\n            <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Repository\" aria-label=\"Search\" [(ngModel)]=\"reponame\" name = \"reponame\" (keyup)= \"searchRepo()\">\n            <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\"> <i class=\"fas fa-search\"></i>Search</button>\n          </form>\n          <p class=\"searchtext\">Enter Repository name to search for github profile</p>\n        </div>\n        <!-- End of search input -->\n        \n\n        <!-- Begining of Repositories section -->\n        <div class=\"col-md-6\" *ngFor=\"let repo of repos['items']\">\n  \n          <div class=\"cards repocard\" >\n            <div class=\"card-header\">\n\n              <h5 class = \"card-title inline\" appFont>\n                  {{repo['name']}}\n              </h5>\n\n              <span class=\"badge badge-info\">\n                <i class=\"fas fa-code-branch\"></i>Forks\n                <span class=\"spacing\">{{repo['forks']}}</span>\n              </span>\n            </div>\n            <div class=\"card-body\">\n                <p>\n                    {{repo['description']}}\n                </p>\n                <p>\n                  {{repo['created_at'] | date}} \n                </p>\n                <a href=\"{{repo.html_url}}\" target=\"_blank\" class= \"btn btn-primary btn-sm\"  >View on Github</a>\n            </div> \n          </div>\n        </div>\n      </div>\n\n      <!-- End of Repositories Section -->\n\n      <!-- Load More -->\n      <div class=\"loadMore\">\n        <button class=\"btn btn-outline-info my-2 my-sm-0 loadMore\" (click)=loadMore()>Load More</button>\n      </div>\n      <!-- End of Load More -->\n  </div>\n</div>\n<!-- End of wrapper -->\n\n"

/***/ }),

/***/ "./src/app/repos/repos.component.ts":
/*!******************************************!*\
  !*** ./src/app/repos/repos.component.ts ***!
  \******************************************/
/*! exports provided: ReposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposComponent", function() { return ReposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _class_repos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/repos */ "./src/app/class/repos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReposComponent = /** @class */ (function () {
    function ReposComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.repos = new _class_repos__WEBPACK_IMPORTED_MODULE_2__["Repos"]("", "", "", new Date());
        this.dataService.getRepoInfo().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    }
    ReposComponent.prototype.searchRepo = function () {
        var _this = this;
        this.dataService.updateRepos(this.reponame);
        this.dataService.getRepoInfo().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    ReposComponent.prototype.loadMore = function () {
        var _this = this;
        // this.dataService.updateRepos(this.reponame);
        this.dataService.updateShow(this.show);
        this.dataService.getRepoInfo().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    ReposComponent.prototype.ngOnInit = function () {
    };
    ReposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-repos',
            template: __webpack_require__(/*! ./repos.component.html */ "./src/app/repos/repos.component.html"),
            styles: [__webpack_require__(/*! ./repos.component.css */ "./src/app/repos/repos.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ReposComponent);
    return ReposComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _repos_repos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../repos/repos.component */ "./src/app/repos/repos.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Defining routes
var routes = [
    { path: "users", component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
    { path: "repos", component: _repos_repos_component__WEBPACK_IMPORTED_MODULE_4__["ReposComponent"] },
    { path: "", redirectTo: "/users", pathMatch: "full" },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        console.log('service is ready');
        this.username = 'SophiaNM';
        this.reponame = 'Quotes';
        this.show = 10;
    }
    DataService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'users/' + this.username + "?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.getRepos = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'users/' + this.username + "/repos?order=created&sort=asc?access_token=" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.getRepoInfo = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'search/repositories?q={' + this.reponame + '}&per_page=' + this.show + '&sort=forks&order=asc?' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accessToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.updateUsers = function (username) {
        this.username = username;
    };
    DataService.prototype.updateRepos = function (reponame) {
        this.reponame = reponame;
    };
    DataService.prototype.updateShow = function (show) {
        this.show = this.show + 10;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Body Styling */\n\ndiv.wrapper{\nmargin-top: 80px;\n}\n\n.inline{\n    display: inline;\n}\n\n/* User Profile Styling */\n\n.profile{\n    margin: 20px;\n}\n\nimg{\n    width:inherit;\n    text-align: centre;\n    margin-top: 50px;\n}\n\nhr.style1 { \n    border: 1px; \n    height: 1px; \n    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);\n    background: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); \n  }\n\nhr.style2 { \nmargin-bottom: 60px;\nborder: 1px; \nheight: 1px; \nbackground-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);\nbackground: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); \n}\n\nh4.style2{\n    margin-top: 50px;\n    font-family: 'Great Vibes', cursive; \n    text-align: center;\n    font-size: 36px;\n    color:#0BB6E4;\n}\n\nh4{\n    font-family: 'Great Vibes', cursive; \n    text-align: center;\n    font-size: 36px;\n    color:#0BB6E4;\n}\n\ntable {\n    border-collapse: collapse;\n    width: 100%;\n}\n\nth, td {\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {background-color: #f2f2f2;}\n\ndiv.col-md-3{\n    text-align: center;\n    margin-bottom: 20px;\n}\n\nspan.profile_follows{\n    float: right;\n}\n\nspan.badge{\n    margin:5px;\n}\n\ni{\n    padding: 5px;\n}\n\n.github_btn{\n    margin: 30px 0px 30px ;\n}\n\n.search{\n    padding: 30px;\n    margin: 0 30px 0 20px;\n}\n\n.searchtext{\n    padding-top:10px;\n    font-size: 14px;\n    color:#8c8b8b;\n}\n\n/* End of Users Styling */\n\n/* Repositories section styling */\n\ndiv.cards{\n    width: 100%;\n}\n\ndiv.cards.repocard{\n    border: 1px solid #d8d4d4;\n    border-radius: 5px;\n    padding-bottom: 5px;\n    margin-bottom: 15px;\n\n}\n\ndiv.container-fluid.search{\n    padding-bottom: 0px;\n\n}\n\n/* End of Repositories Styling */\n\n/* Extra small devices (phones, 600px and down) */\n\n@media only screen and (max-width: 348px) {\n    div.card-header{\n        height: 180px;\n    }\n\n}\n\n@media only screen and (max-width: 610px)and (min-width:348px) {\n    div.card-header{\n        height: 110px;\n    }\n\n} \n\n\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Navigation Section -->\n<app-root></app-root>\n\n<!-- Begin of Wrapper -->\n<div class=\"wrapper\">\n\n  <div class=\"container-fluid\">\n\n    <div class=\"row\">\n      \n      <!-- Search input Section -->\n      <div class=\"container-fluid search\">\n        <form class=\"form-inline\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Git Username\" aria-label=\"Search\" [(ngModel)]=\"username\" name = \"username\" (keyup)= \"searchUser()\">\n          <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\"> <i class=\"fas fa-search\"></i>Search</button>\n        </form>\n        <p class=\"searchtext\">Enter Username to search for github profile</p>\n      </div>\n    </div>\n    <!-- End of search section -->\n\n  <!-- Begin of User Profile sectioin -->\n    <div class=\"row profile\">\n\n      <div class=\"col-md-12 col-sm-12\">\n\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n\n              <div class=\"cards\">\n                  <div class=\"card-header\">\n                      <p class = \"inline\">\n                        Username: {{users.login}}\n                      </p>\n\n                      <span class=\"profile_follows\">\n                        <span class=\"badge badge-primary\">\n                        <i class=\"fas fa-user\"></i>Followers\n                        <span class=\"spacing\">{{users.followers}}</span>\n                      </span>\n                      <span class=\"badge badge-success\">\n                        <i class=\"fas fa-user\"></i>Following\n                        <span class=\"spacing\">{{users.following}}</span>\n                      </span>\n                      <span class=\"badge badge-info\">\n                        <i class=\"fas fa-code-branch\"></i>Public Gist\n                        <span class=\"spacing\">{{users.public_gist}}</span>\n                      </span>\n                      </span>\n\n                  </div>\n              </div>\n\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-3 col-sm-12\">\n                <img src=\"{{users.avatar_url}}\" alt=\"avatar image\" class=\"rounded-circle img-responsive\">\n              </div>\n\n\n              <div class=\"col-md-7 offset-md-2 col-sm-12\">\n                <div *ngIf=\"users['name']\">\n                  <h4>{{users.name}}</h4>\n                </div>\n                  <hr class=\"style1\">\n                  <p>{{users.bio}}</p>\n                  <table>\n                      <tr *ngIf=\"users.created_at\">\n                        <td>Created On</td>\n                        <td>{{users.created_at | date}}</td>\n\n                      </tr>\n                      <tr>\n                        <td>Number of Repos</td>\n                        <td>{{users.public_repos}}</td>\n\n                      </tr>\n                      <tr *ngIf=\"users['hireable']\">\n                        <td>Hireable</td>\n                        <td>{{users.hireable}}</td>\n\n                      </tr>\n                      <tr>\n                        <td *ngIf=\"users.company\">Company</td>\n                        <td>{{users.company}}</td>\n\n                      </tr>\n                    </table>\n\n                    <p>\n                      <a href=\"{{users.html_url}}\" target=\"_blank\"class=\"btn btn-primary btn-sm github_btn\">View profile from Github</a>\n                    </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n<!-- End of User Profile Section -->\n\n<!-- Begin of Repositories Section -->\n      <div class=\"container-fluid\">\n          <h4 class=\"style2\">{{users.name | last}}'s Repositories</h4>\n          <hr class=\"style2\">\n        <div class=\"row\">\n\n\n          <div class=\"col-md-6\" *ngFor=\"let repo of repos;let i = 'index'\">\n\n                <div class=\"cards repocard\">\n                  <div class=\"card-header\">\n\n                    <h5 id = {{i}} class = \"card-title\">\n                        {{repo.name}}\n                    </h5>\n                  </div>\n                 <div class=\"card-body\">\n                      <p>\n                         {{repo.description}}\n                      </p>\n                      <p>\n                        {{repo.created_at | date}}\n                      </p>\n                      <a href=\"{{repo.html_url}}\" target=\"_blank\" class= \"btn btn-primary btn-sm\">View on Github</a>\n                  </div>\n                </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- End of Repositories Section -->\n    </div>\n  </div>\n</div>\n<!-- End of Wrapper -->\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _class_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/users */ "./src/app/class/users.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.users = new _class_users__WEBPACK_IMPORTED_MODULE_2__["Users"]("", "", "", "", "", "", "", 0, false, new Date(), 0, 0);
        this.dataService.getUsers().subscribe(function (users) {
            console.log(users);
            _this.users = users;
        });
        this.dataService.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
        // Repeated subscribing of dataservice to allow for the display of default data 
    }
    UsersComponent.prototype.searchUser = function () {
        var _this = this;
        this.dataService.updateUsers(this.username);
        this.dataService.getUsers().subscribe(function (users) {
            console.log(users);
            _this.users = users;
        });
        this.dataService.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "https://api.github.com/",
    accessToken: 'fc72c5aeec8b8a2b1ab6709a1e491d735b4d49d8'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/njeri/Desktop/Project/Moringa/Angular/Github/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map