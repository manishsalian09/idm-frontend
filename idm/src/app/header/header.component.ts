import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() open = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit() {
  }

  onOpen(): void {
    this.open.emit();
  }
}
