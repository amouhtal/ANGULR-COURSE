import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() roomList: RoomList[]  = [];
  @Input() title: string = '';
  @Input() price: any = 0;
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {}

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
