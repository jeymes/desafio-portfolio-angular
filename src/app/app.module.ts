import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header.component';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './screens/about/about.component';
import { SkillsComponent } from './screens/skills/skills.component';
import { CardComponent } from './components/card/card.component';
import { ProjectComponent } from './screens/project/project.component';
import { CardProjectComponent } from './components/card-project/card-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CardComponent,
    ProjectComponent,
    CardProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
