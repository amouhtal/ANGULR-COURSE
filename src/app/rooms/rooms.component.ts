import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, observable, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  totalBytes = 0;

  selectedRoom!: RoomList;
  rooms: Room | undefined = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  subscription!: Subscription;

  roomList: RoomList[] = [];

  error$ : Subject<string> = new Subject<string>();
  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message)
      return of([])
    })
  );
  
  // rooms2$ = this.roomsService.getRooms$.pipe(
  //   catchError((err) => {
  //     console.log(err);
  //     this.error$.next(err.message)
  //     return of([])
  //   })
  // );
  @ViewChild(HeaderComponent, { static: true })
  headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  stream = new Observable<string>((observer) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    setTimeout(() => {
      observer.next('5');
      observer.complete();
    }, 6000);
  });

  constructor(private roomsService: RoomsService, private configService: ConfigService,
    ) {}

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {}

  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Rooms View';
    // this.headerChildrenComponent.get(0).title = 'Rooms View';
    this.headerChildrenComponent.last.title = 'Rooms View';
  }

  ngOnInit(): void {
    // this.stream.subscribe({
    //   next: (data)=>{
    //     console.log(data);
    //   },
    //   complete: () =>{
    //     console.log('complete');
    //   },
    //   error: ()=>{
    //     console.log('error')
    //   }
    // });
    this.subscription = this.roomsService.getRooms$.subscribe(
      {
        next: (data) => {
          this.roomList = data;
        },
        error: (err) => {
          console.log(err);
        }
        ,
        complete: () => {
          console.log('complete');
        }
      }
     
      
    );
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Delux Room',
      amenities: ['Air Conditioner, free wifi, tv'],
      price: 500,
      photo: 'assets/images/suite.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('15-Nov-2021'),
      rating: 4.5,
    };
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Delux Room',
      amenities: ['Air Conditioner, free wifi, tv'],
      price: 500,
      photo: 'assets/images/suite.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('15-Nov-2021'),
      rating: 4.5,
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
