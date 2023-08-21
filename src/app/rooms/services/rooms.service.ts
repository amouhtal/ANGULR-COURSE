import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Standard',
      amenities: ['TV', 'AC', 'Wifi'],
      price: 1000,
      photo: 'assets/images/standard.jpg',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 3.123456789,
    },
    {
      roomNumber: 102,
      roomType: 'Deluxe',
      amenities: ['TV', 'AC', 'Wifi', 'Refrigerator'],
      price: 2000,
      photo: 'assets/images/deluxe.jpg',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 3.9,
    },
    {
      roomNumber: 103,
      roomType: 'Suite',
      amenities: ['TV', 'AC', 'Wifi', 'Refrigerator', 'Bathtub'],
      price: 3000,
      photo: 'assets/images/suite.jpg',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      rating: 4.8,
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {}

  getRooms() {
    return this.roomList;
  }
}
