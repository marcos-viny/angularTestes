import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  opened : boolean = false;
   
  constructor() {}

  ngOnInit(): void {
  }

  toggle(){
    this.opened = !this.opened;
  }

}
