import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-indcription',
  templateUrl: './indcription.component.html',
  styleUrls: ['./indcription.component.scss']
})
export class IndcriptionComponent {
  
  user!:any;

  inscription = new FormGroup(
    {
      userName: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
      email: new FormControl('',{nonNullable: true, validators: [Validators.required]}),
      password: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      // verifPassword: new FormControl('', Validators.required),
      adresse: new FormGroup({
        num: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
        rue: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
        codeP: new FormControl(0, {nonNullable: true, validators: [Validators.required]}),
        ville: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
      })
    }
    )
    
    onSubmitForm() {
this.user = this.inscription.value
    }
}
