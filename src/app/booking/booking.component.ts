import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  guests = this.bookingForm.get('guests') as FormArray;
  constructor(private configService: ConfigService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      checkInDate: new FormControl(''),
      checkOutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestEmail: new FormControl(''),
      guestName: new FormControl(''),
      guestCount: new FormControl(''),
      address: this.fb.group({
        AdressLine1: new FormControl(''),
        AdressLine2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: new FormControl(''),
          age: new FormControl(''),
        }),
      ]),
    });
  }

  addBooking() { 
    console.log('values', this.bookingForm.getRawValue());

    this.bookingForm.reset();
  }
  addGuest() {
    this.guests.controls.push();
  }
}
