import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() name = 'Nelson';
  @Input() lastName = 'Sambula';

  constructor() { }

  ngOnInit(): void {
  }

}
