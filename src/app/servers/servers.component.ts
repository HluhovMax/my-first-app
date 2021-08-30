import { Component, OnInit } from '@angular/core';

@Component({
  selector: `app-servers`, // <- most common selector type
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    console.log(`Inside ServersComponent.Constructor`)
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
    console.log(`Inside ServersComponent.ngOnInit`)
  }

}
