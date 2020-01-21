import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";

  constructor() { 
    setTimeout ( () => {
      this.allowNewServer = true;
    }, 2000); 
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "A new server was created";
  }

}
