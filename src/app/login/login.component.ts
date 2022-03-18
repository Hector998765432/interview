import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { User } from '../ïnterfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _message: NzMessageService
  ) {}

  passwordVisible = false;

  public defaultUser: User = {
    email: '',
    name: '',
    second_name: '',
  };

  ngOnInit(): void {
    this.formsCreation();
  }

  validateForm!: FormGroup;
  formsCreation() {
    this.validateForm = this.fb.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  signIn() {
    if (
      this.validateForm.value.user === 'user' &&
      this.validateForm.value.password === 'root'
    ) {
      this._message.create('success', 'Bienvenido');
      this._router.navigateByUrl('welcome');
      this.defaultUser = {
        email: 'salsih99@gmail.com',
        name: 'Héctor',
        second_name: 'Galván',
      };
    } else
      this._message.create('error', 'Usuario o contraseña incorrectos.'),
        this.validateForm.reset();
  }
}
