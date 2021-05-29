import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/pages/main/main-page.component';
import { RegisterComponent } from 'src/pages/register/register-page.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
