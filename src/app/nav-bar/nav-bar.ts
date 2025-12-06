import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../auth/auth-service';

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
  constructor(public authservice:AuthService){

  }
}
