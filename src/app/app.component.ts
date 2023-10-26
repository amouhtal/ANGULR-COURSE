import { Component, ElementRef, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-course';

  role = 'admin';

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;
  
  constructor(@Optional() private loggerService: LoggerService,
  @Inject(LocalStorageToken) private localStorage: Storage,
  private initService: InitService,
  private configService: ConfigService,
  private router: Router
  ) {
    console.log('InitService', initService.config);
  }

  ngOnInit(): void {
    // this.name.nativeElement.innerHTML = 'Hello World';
    this.router.events.subscribe((event)=> {
      console.log(event);
    })
    this.localStorage.setItem('name', 'John');
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 144;
  // }
  run(){
    
  }
}
