import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../user/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<void>(); 

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onOpen(): void {
    this.open.emit();
  }

  logout() {
    this.authService.logout();
  }
}
