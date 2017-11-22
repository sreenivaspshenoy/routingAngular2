import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';

const appRoutes: Routes =  [
  { path: 'experience', component: WorkExperienceComponent } , //localhost:4200/experience
  { path: 'education', component: EducationComponent } , //localhost:4200/education
  { path: '', component: HomeComponent} //localhost:4200
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
