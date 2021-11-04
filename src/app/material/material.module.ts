import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
