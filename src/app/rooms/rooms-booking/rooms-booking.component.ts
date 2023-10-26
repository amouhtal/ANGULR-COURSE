import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss'],
})
export class RoomsBookingComponent implements OnInit {
  // id: number;
  id$: Observable<number> = this.router.paramMap.pipe(
    map((params) => {
      return params.has('roomID') ? parseInt(params.get('roomID') || '0') : 0;
    })
  );
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      // this.id = params.id;
      console.log(params['roomID']);
    });
  }
}
