import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {Ideas} from './ideas/ideas';
import {Test} from './test/test';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'; 
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {TabViewModule} from 'primeng/primeng';
import {TabMenuModule, PanelMenuModule, MenuItem} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';

import 'hammerjs'
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
  declarations: [AppComponent, About, RepoBrowser, RepoList, RepoDetail, Home, Ideas, Test,ListFilterPipe ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig),

  InputTextModule,
  DataTableModule,
  ButtonModule,
  DialogModule,
  TabViewModule,
  PanelMenuModule,
  TabMenuModule,
  DropdownModule,
  PanelModule
  ],

  providers   : [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
