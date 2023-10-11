import { Component, Host, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[] = [];
  no: number = 1;

  constructor(private hotelService: HotelService) {

  }

  ngOnInit(): void {
    // Hvatamo dogadjaj inicijalizovanja komponenti
    this.hotelService.getAllHotels().subscribe(data => {
      this.hotels = data;
    });
  }
}
