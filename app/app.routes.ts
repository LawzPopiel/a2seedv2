import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {Ideas} from './ideas/ideas';
import {Test} from './test/test';
import {Guide} from './guide/guide';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: 'github', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':org', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':repo', component: RepoDetail}
        ]
      }]
  },
  {path: 'ideas', component: Ideas},
  {path: 'test', component: Test},
];

