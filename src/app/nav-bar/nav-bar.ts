import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {

}
