import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room | undefined= {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Standard',
      amenities: ['TV', 'AC', 'Wifi'],
      price: 1000,
      photo: 'assets/images/standard.jpg',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    },
    {
      roomNumber: 102,
      roomType: 'Deluxe',
      amenities: ['TV', 'AC', 'Wifi', 'Refrigerator'],
      price: 2000,
      photo: 'assets/images/deluxe.jpg',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    },
    {
      roomNumber: 103,
      roomType: 'Suite',
      amenities: ['TV', 'AC', 'Wifi', 'Refrigerator', 'Bathtub'],
      price: 3000,
      photo: 'assets/images/suite.jpg',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
