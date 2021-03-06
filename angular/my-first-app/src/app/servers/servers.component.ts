import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus='No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver1','Testserver2']; 

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }
    , 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created'
  }

  onUpdateServerName(e: Event){
    this.serverName = (<HTMLInputElement>e.target).value;
  }

}
