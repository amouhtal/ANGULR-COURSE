import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {
  
  successMessage: string = '';
  AddRoom(roomsForm: any){
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = 'Room added successfully';
      roomsForm.resetForm({
        roomNumber: '',
        roomType: '',
        amenities: [''],
        checkInTime: new Date(),
        checkOutTime: new Date(),
        photo: '',
        price: 0,
        rating: 0,
      });
    }
    );
    
  }
  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: [''],
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photo: '',
    price: 0,
    rating: 0,
  }
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

}
