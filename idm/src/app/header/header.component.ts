import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<void>(); 
  private user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isLoggedin) {
      this.authService.loggedInUser().subscribe(data => {
        console.log(data);
        this.user = data;
      });
    }
  }

  onOpen(): void {
    this.open.emit();
  }

  logout() {
    this.authService.logout();
  }
}
