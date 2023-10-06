import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, merge, mergeMap, switchMap } from 'rxjs';
import { CustomeValidator } from './validators/customer-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private roomBookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      checkInDate: new FormControl(''),
      checkOutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        CustomeValidator.ValidateName,
        CustomeValidator.ValidatSpecialCharacter('*'),
      ]),
      guestCount: new FormControl(''),
      address: this.fb.group({
        AdressLine1: new FormControl('', {
          validators: [Validators.required],
        }),
        AdressLine2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipCode: new FormControl(''),
      }),
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, Validators.requiredTrue),
    });
    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((changes) => {
    // this.roomBookingService.bookRoom(changes).subscribe((response) => {});
    this.bookingForm.valueChanges
      // .pipe(mergeMap((changes) => this.roomBookingService.bookRoom(changes)))
      // .pipe(switchMap((changes) => this.roomBookingService.bookRoom(changes)))
      .pipe(exhaustMap((changes) => this.roomBookingService.bookRoom(changes)))

      .subscribe((response) => {});
    // });
  }

  addBooking() {
    console.log('values', this.bookingForm.getRawValue());

    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      guestCount: '',
      address: {
        AdressLine1: '',
        AdressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [
        {
          guestName: '',
          age: '',
        },
      ],
      tnc: false,
    });
  }
  addGuest() {
    this.guests.push(this.addGuestControl());
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
  addGuestControl() {
    return this.fb.group({
      guestName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      age: new FormControl(''),
    });
  }
  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: 'test@test.test',
      checkInDate: '2023-01-01',
      checkOutDate: '2023-01-02',
      bookingStatus: 'confirmed',
      bookingAmount: '1000',
      bookingDate: '2023-01-01',
      mobileNumber: '1234567890',
      guestName: 'test',
      guestCount: '2',
      address: {
        AdressLine1: 'test',
        AdressLine2: '',
        city: 'test',
        state: 'test',
        country: 'test',
        zipCode: '123456',
      },
      guests: [
        {
          guestName: 'test',
          age: '20',
        },
        {
          guestName: 'test',
          age: '20',
        },
      ],
      tnc: false,
    });
  }
}
