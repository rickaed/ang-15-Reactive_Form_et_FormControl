import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { NonNullAssert } from '@angular/compiler';
import { IForm } from '../models/iform';

@Component({
  selector: 'app-indcription',
  templateUrl: './indcription.component.html',
  styleUrls: ['./indcription.component.scss']
})
export class IndcriptionComponent {

  user!: User;

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    credential: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    }),
    num: new FormControl(0, [Validators.required]),
    rue: new FormControl('', [Validators.required]),
    codeP: new FormControl(0, [Validators.required]),
    ville: new FormControl('', [Validators.required]),
  });

  onSubmitForm() {
    this.user = this.userForm.getRawValue();
  }



}
