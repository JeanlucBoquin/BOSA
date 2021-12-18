import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    TitleComponent,
    SidebarComponent,
    ProfileComponent,
    NavbarComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    TitleComponent,
    SidebarComponent,
    ProfileComponent,
    NavbarComponent,
    ItemComponent
  ]
})
export class SharedModule { }
