import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;
  rooms: Room | undefined= {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = []

  constructor() {}
  
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngOnInit(): void {
    this.roomList = [
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
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Delux Room',
      amenities: ['Air Conditioner, free wifi, tv'],
      price: 500,
      photo: 'assets/images/suite.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('15-Nov-2021'),
      rating: 4.5
    }
    this.roomList = [...this.roomList, room]
  }
}
