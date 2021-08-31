import {Component} from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: navajowhite;
    }
  `]
})
export class ServerComponent {
  city = `New York`;
  serverId = 10;
  serverStatus: string = 'offline';


  constructor() {
    // determine server status
    this.serverStatus = Math.random() > 0.5 ? `online` : `offline`;

    // logging the server status
    this.log(
      this.getMessageForServerStatus(),
      this.prepareServerStatus(this.serverStatus),
      this.getColorForStatus(this.serverStatus)
    );
  }

  getColorForStatus(status: string) {
    return status === `online` ?
      `background: antiquewhite; color: yellowgreen;` :
      `background: antiquewhite; color: crimson;`;
  }

  log(message: string, status: string, color: string) {
    color === `` ?
      console.log(message + status) :
      console.log(message + status, color);
  }

  prepareServerStatus(status: string) {
    return `%c ` + status;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getMessageForServerStatus() {
    return `Server status is: `;
  }

  getColor() {
    return this.serverStatus === `online` ? `green` : `red`;
  }
}
