import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any){
    if(this.email === 'admin' && this.password === 'admin'){
      // this.router.navigateByUrl('/rooms/add');
      this.router.navigate(['/rooms', 'add']);
      loginForm.resetForm({
        email: '',
        password: '',
      });
    }
  }
}
