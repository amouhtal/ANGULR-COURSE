import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  login(loginForm: any) {
    if (
      this.loginService.login(this.email, this.password)
      ) {
      // this.router.navigateByUrl('/rooms/add');
      // this.router.navigate(['/rooms', 'add']);
      this.router.navigate(['/rooms']);
      loginForm.resetForm({
        email: '',
        password: '',
      });
    }
  }
}
