import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<server></server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    console.log(`Inside ServersComponent.Constructor`)
  }

  ngOnInit(): void {
    console.log(`Inside ServersComponent.ngOnInit`)
  }

}
