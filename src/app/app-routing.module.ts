import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './screens/contact/contact.component';
import { HomeComponent } from './screens/home/home.component';
import { ProjectComponent } from './screens/project/project.component';
import { SkillsComponent } from './screens/skills/skills.component';
import { AboutComponent } from './screens/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
