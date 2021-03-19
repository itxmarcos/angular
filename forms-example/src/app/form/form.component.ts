import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'usuario': [],
      'contrasenia': [],
      'fecha': [],
      'email': []
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('You submitted value: ', this.myForm.value);
  }

  //NOTA: ver app.module.ts

}
