import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpersModule } from "../helpers/helpers.module";
import { ViewHotelComponent } from './view-hotel/view-hotel.component';


@NgModule({
    declarations: [
        HomeComponent,
        HotelsComponent,
        ContactUsComponent,
        ViewHotelComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        HelpersModule,
    ]
})
export class PagesModule { }
