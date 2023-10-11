import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewHotelComponent } from './view-hotel/view-hotel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'view-hotel/:id', component: ViewHotelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
