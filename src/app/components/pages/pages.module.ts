import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpersModule } from "../helpers/helpers.module";
import { ViewHotelComponent } from './view-hotel/view-hotel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HomeComponent,
        HotelsComponent,
        ContactUsComponent,
        ViewHotelComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        HelpersModule,
        FormsModule
    ]
})
export class PagesModule { }
