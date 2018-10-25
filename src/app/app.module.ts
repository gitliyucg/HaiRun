import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { PlayComponent } from './movies/play/play.component';
import { ContactComponent } from './contact/contact.component';
import { CreativeComponent } from './creative/creative.component';
import { CreatorComponent } from './creative/creator/creator.component';
import { NewsComponent } from './news/news.component';
import { InvestComponent } from './invest/invest.component';
import { LibraryComponent } from './movies/library/library.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { InvestlistComponent } from './invest/investlist/investlist.component';

const root: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  /*首页*/
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  /*企业介绍*/
  {path: 'about', component: AboutComponent},
  /*影视*/
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/play', component: PlayComponent},
  {path: 'movies/library', component: LibraryComponent},
  /*新闻*/
  {path: 'news', component: NewsComponent},
  {path: 'news/newslist', component: NewslistComponent},
  /*联系我们*/
  {path: 'contact', component: ContactComponent},
  /*招商*/
  {path: 'invest', component: InvestComponent},
  {path: 'invest/investlist', component: InvestlistComponent},
  /*创作人*/
  {path: 'creative', component: CreativeComponent},
  {path: 'creative/creator', component: CreatorComponent},
  {path: '**', component: IndexComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    MoviesComponent,
    PlayComponent,
    ContactComponent,
    CreativeComponent,
    NewsComponent,
    InvestComponent,
    LibraryComponent,
    NewslistComponent,
    InvestlistComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(root)
  ],
  providers: [
    HashLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
