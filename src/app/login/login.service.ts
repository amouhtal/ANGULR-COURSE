import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() { }

  login(email:string, password: string): boolean{
    if(email === 'admin' && password === 'admin'){
      // this.router.navigateByUrl('/rooms/add');
      // this.router.navigate(['/rooms', 'add']);
      this.isLoggedIn = true;
      this.isAdmin = true;    

    }else if(email === 'user' && password === 'user'){
      this.isLoggedIn = true;
    }

    return this.isLoggedIn;
  }
}
