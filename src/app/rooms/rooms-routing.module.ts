import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  { path: 'add', component: RoomsAddComponent },

  {
    path: '',
    component: RoomsComponent,
    children: [
      // {
      //   path: 'add',
      //   component: RoomsAddComponent,
      // },
      {
        path: ':roomID',
        component: RoomsBookingComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
