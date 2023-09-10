import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { IntroComponent } from './intro/intro.component';
import { TimelineComponent } from './timeline/timeline.component';
import { InternshipComponent } from './internship/internship.component';
import { SkillComponent } from './skill/skill.component';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { LazyLoadDirective } from './lazy-load.directive';
import { ProjectsComponent } from './projects/projects.component';
import { ShortTimelineComponent } from './short-timeline/short-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutMeComponent,
    NotFoundComponent,
    ContactMeComponent,
    IntroComponent,
    TimelineComponent,
    InternshipComponent,
    SkillComponent,
    EducationComponent,
    LazyLoadDirective,
    ProjectsComponent,
    ShortTimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
