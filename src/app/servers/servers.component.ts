import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', <- attribute-like selector
  // selector: `.app-servers`, <- class-like selector
  selector: `app-servers`, // <- most common selector type
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
