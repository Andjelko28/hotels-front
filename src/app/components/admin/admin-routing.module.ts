import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditHotelComponent } from './add-edit-hotel/add-edit-hotel.component';

const routes: Routes = [
  { path: 'add-hotel', component: AddEditHotelComponent },
  { path: 'edit-hotel/:id', component: AddEditHotelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
