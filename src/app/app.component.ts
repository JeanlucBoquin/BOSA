import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-clientes';
  // Declare height and width variables

  scrHeight: number = 0;
  scrWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 825) {
      document.getElementById("menuToggel")!.style.display = "block";
      document.getElementById("optionsNav")!.style.display = "none";
      console.log(document.getElementById("menuToggel")?.style.display);

    } else {
      document.getElementById("menuToggel")!.style.display = "none";
      document.getElementById("optionsNav")!.style.display = "block";
    }
    console.log(this.scrHeight, this.scrWidth);
  }


  ngOnInit() {
    this.scrWidth = window.innerWidth;
    if (this.scrWidth < 825) {
      document.getElementById("menuToggel")!.style.display = "block";
      document.getElementById("optionsNav")!.style.display = "none";
      console.log(document.getElementById("menuToggel")?.style.display);

    } else {
      document.getElementById("menuToggel")!.style.display = "none";
      document.getElementById("optionsNav")!.style.display = "block";
    }
  }
}
