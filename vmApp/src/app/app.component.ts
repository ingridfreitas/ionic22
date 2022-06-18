import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  /*ii: boolean;

  if(boolean ii == true){

  }*/

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  /*n: number;

  public clicks = [];

  let click = document.querySelector(".mode")

  mi(){
    while()
    var estado = true;
    if (estado == true){
      console.log("Ingrid");
      var mute = document.getElementById('otherss');
      mute.classList.remove("otro");
    }
    if(estado == false){
      console.log("FerFer");
    }
  }*/

  mi() {
    /*let ii = false;

    const update = function(){
      const mode = document.querySelector(".mode");
      mode.textContent = ii ? 'on' : 'off';
    }*/


  }

}
