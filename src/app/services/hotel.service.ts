import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../models/Hotel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllHotels() {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotel`)
  }

  getHotelByID(id: number) {
    return this.http.get<Hotel>(`${this.apiUrl}/hotel/${id}`);
  }

  insertHotel(hotel: Hotel) {
    return this.http.post(`${this.apiUrl}/hotel`, hotel);
  }

  updateHotel(hotel: Hotel) {
    return this.http.put(`${this.apiUrl}/hotel/${hotel.id}`, hotel);
  }

  deleteHotel(id: number) {
    return this.http.delete(`${this.apiUrl}/hotel/${id}`);
  }

  uploadImage(formData: FormData) {
    return this.http.post(`${this.apiUrl}/upload`, formData)
  }
}
