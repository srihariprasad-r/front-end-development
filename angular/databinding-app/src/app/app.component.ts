import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Test Server', content: 'It is a test server'}];

  onServerAdded(server: {servername:string, servercontent:string}) {
      this.serverElements.push({
      type: 'server',
      name: server.servername,
      content: server.servercontent
      });
  }
   
  onBlueprintAdded(blueprint: {servername:string, servercontent:string}) {
     this.serverElements.push({
     type: 'blueprint',
     name: blueprint.servername,
     content: blueprint.servercontent
  });
}

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
  
  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

}
