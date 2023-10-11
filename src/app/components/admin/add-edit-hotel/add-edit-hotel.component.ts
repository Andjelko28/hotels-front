import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/models/Hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-edit-hotel',
  templateUrl: './add-edit-hotel.component.html',
  styleUrls: ['./add-edit-hotel.component.scss']
})
export class AddEditHotelComponent implements OnInit {

  hotel: Hotel = new Hotel();
  edit: boolean = false;
  fileToUpload: any = null;
  apiUrl = environment.API_URL;

  constructor(private hotelService: HotelService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramData => {
      if (paramData['id']) {
        this.edit = true;
        // edit operacije, pozovi servis
        this.hotelService.getHotelByID(paramData['id']).subscribe(data => {
          this.hotel = data;
        })
      }
    })
  }

  saveHotel() {
    if (this.edit) {
      //console.log("FILE: ", this.fileToUpload); 
      if (this.fileToUpload) {
        // ako fajl postoji 
        let formData: FormData = new FormData();
        formData.append('img', this.fileToUpload);
        this.hotelService.uploadImage(formData).subscribe((fileUploadResponse: any) => {
          this.hotel.image_path = fileUploadResponse.filename;
          this.hotelService.updateHotel(this.hotel).subscribe(data => {
            this.router.navigateByUrl('/hotels');
          })
        })
      }
      else {
        this.hotelService.updateHotel(this.hotel).subscribe(data => {
          this.router.navigateByUrl('/hotels');
        })
      }
    }
    else {
      let formData: FormData = new FormData();
      formData.append('img', this.fileToUpload);

      this.hotelService.uploadImage(formData).subscribe((fileUploadResponse: any) => {

        this.hotel.image_path = fileUploadResponse.filename;
        this.hotelService.insertHotel(this.hotel).subscribe(data => {
          // LOGIKA PROVJERE DA LI JE SVE OKEJ 
          // console.log(data); 
          this.router.navigateByUrl('/hotels');
        })
      })
    }
  }

  setUploadedFile(event: any) {
    this.fileToUpload = event.target.files[0];
    console.log("FILE", this.fileToUpload);
  }
}
