import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
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
