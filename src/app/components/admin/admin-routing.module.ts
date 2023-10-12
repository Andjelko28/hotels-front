import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditHotelComponent } from './add-edit-hotel/add-edit-hotel.component';
import { adminGuard } from 'src/app/guards/admin.guard';

const routes: Routes = [
  { path: 'add-hotel', component: AddEditHotelComponent, canActivate: [adminGuard] },
  { path: 'edit-hotel/:id', component: AddEditHotelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
