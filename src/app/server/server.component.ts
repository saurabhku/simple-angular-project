import { Component } from '@angular/core';  

@Component ({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        p {
            color: blue
        }
    `]
})
export class ServerComponent {
    serverId:number = 10;
    serverStatus:string = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}