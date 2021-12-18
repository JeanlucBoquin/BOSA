import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  nombre: string = '';

  constructor(
    private router: Router,
    private $cookie: CookieService,
    ) { }

  ngOnInit(): void {
    const biker = JSON.parse(localStorage.getItem('currentBiker')!);
    this.nombre = `${biker.nombre} ${biker.apellido}`;
  }

  logout(): void {
    console.log('cerrar sesion');
    localStorage.removeItem('currentBiker');
    this.$cookie.delete('token_access');
    this.router.navigateByUrl('identificacion');
  }
}
