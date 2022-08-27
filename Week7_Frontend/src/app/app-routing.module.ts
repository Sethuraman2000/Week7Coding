import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { WrongpathComponent } from './wrongpath/wrongpath.component';
import { ProductComponent } from './product/product.component';
import { ElectronicshopComponent } from './electronicshop/electronicshop.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},

  {path: 'about', component : AboutComponent},

  {path: 'contact', component : ContactComponent},

  {path: 'login', component : LoginComponent},

  {path: 'product', component : ProductComponent},
  
  {path: 'electronicshop', component : ElectronicshopComponent}, 

   {path: '', component: HomeComponent},

     {path: '**', component : WrongpathComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
