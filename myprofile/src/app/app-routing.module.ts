import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EditprofileComponent } from './editprofile/editprofile.component';


const routes: Routes = [{ path: '', component: AboutmeComponent },
{ path: 'Editprofile', component: EditprofileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
