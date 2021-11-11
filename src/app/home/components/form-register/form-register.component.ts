import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    rtn: ['', Validators.required],
    email: ['', Validators.required],
    tel: ['', Validators.required],
    tel2: ['', Validators.required],
    country: ['', Validators.required],
    direction: ['', Validators.required],
    category: ['', Validators.required],
    quantityBranches: [0, Validators.required],
    nameAdmins: ['', Validators.required],
    img: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
