import { Component,inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validator, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../../core/models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  hidePassword=true;

  loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    rememberMe:[false]
  });

  login(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log(this.loginForm.value);

    // Replace with your API call
    const loginForm=this.loginForm.value;
 const request: LoginRequest = {
  username: this.loginForm.get('username')?.value ?? '',
  password: this.loginForm.get('password')?.value ?? ''
};
    this.authService.login(request).subscribe({

    next: (response) => {

      console.log(response);

      this.authService.setAuthenticated(true);
      this.authService.saveUser(response);
      this.authService.setCurrentUser(response);
      this.authService.saveToken(response.accessToken);
      this.router.navigate(['/dashboard']);

    },

    error: (error) => {

      console.log(error);

    }

  });
 
  }


 
}
