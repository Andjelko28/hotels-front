import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-view-hotel',
  templateUrl: './view-hotel.component.html',
  styleUrls: ['./view-hotel.component.scss']
})
export class ViewHotelComponent implements OnInit {

  hotel: Hotel = new Hotel();
  apiUrl = environment.API_URL;
  
  constructor(private hotelService: HotelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {
      let hotelID: number = paramsData['id'];
      this.hotelService.getHotelByID(hotelID).subscribe(data => {
        this.hotel = data
      })
    })
  }
}


