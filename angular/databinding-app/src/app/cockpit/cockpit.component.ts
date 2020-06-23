import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{servername:string, servercontent:string}>();
  @Output() blueprintCreated = new EventEmitter<{servername:string, servercontent:string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      servername: this.newServerName, 
      servercontent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      servername: this.newServerName, 
      servercontent: this.newServerContent
    });
  }
}
