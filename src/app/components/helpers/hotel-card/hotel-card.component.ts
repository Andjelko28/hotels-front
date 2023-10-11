import { Component, Host, Input } from '@angular/core';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelsComponent } from '../../pages/hotels/hotels.component';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent {
  @Input('hotel')
  h: Hotel = new Hotel();

  apiUrl = environment.API_URL;

  constructor(private hotelService: HotelService,

    @Host() private hotelsComponent: HotelsComponent) { }

  deleteHotel() {
    if (confirm('Are you sure?')) {
      this.hotelService.deleteHotel(this.h.id).subscribe(data => {
        this.hotelsComponent.ngOnInit();
      })
    }
  }

}
