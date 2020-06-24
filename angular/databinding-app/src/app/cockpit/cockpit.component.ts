import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{servername:string, servercontent:string}>();
  @Output() blueprintCreated = new EventEmitter<{servername:string, servercontent:string}>();
  //newServerName = '';
 // newServerContent = '';
 //below @ViewChild is used to get the html local reference '#<variable> which is of type ElementRef and use it in TS'
  @ViewChild('serverContent') serverContent : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      servername: nameInput.value, 
      servercontent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      servername: contentInput.value, 
      servercontent: this.serverContent.nativeElement.value
    });
  }
}
