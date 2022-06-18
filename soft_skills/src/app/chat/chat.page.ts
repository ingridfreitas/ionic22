import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [
    {
      user: 'Soft',
      msg: 'Já ouviu falar na Soft Skill de comunicação?'
    },
    {
      user: 'Soft',
      msg: 'Gostaria que respondesse com "Sim" ou "Não"'
    },
  ];


  usuario = 'Usuário';

  newMsg = '';
  sisMsg = '';

  @ViewChild(IonContent) content: IonContent

  msgEnv(){
    this.messages.push({
      user: 'Usuário',
      msg: this.newMsg
    });

    this.newMsg = '';

    this.content.scrollToBottom(200);
  }

  next(){
    this.messages.push({
      user: 'Soft',
      msg: 'Comunicação é a capacidade de trocar informações com clareza, sejam elas ideias, conteúdos, comportamentos, experiências, até mesmo conceitos abstratos e de difícil compreensão.'
    });

    this.messages.push({
      user: 'Soft',
      msg: 'Uma boa comunicação envolve saber se expressar da melhor forma, em diferentes meios e nos momentos certos, mas também saber ouvir e compreender outras pessoas.'
    });

    this.messages.push({
      user: 'Soft',
      msg: 'E a importância? Gostaria de saber? '
    });

    this.messages.push({
      user: 'Soft',
      msg: 'Agora passaremos para o próximo tópico. Aperte essa mensagem e depois pressione a imagem...'
    });

    this.sisMsg = '';

    this.content.scrollToBottom(200);

    
  }
  
  aparecer(){
    var drax = document.querySelector(".drax");
    drax.classList.remove("drax")
  }

  rota(){
    this.route.navigateByUrl('/adap')
  }

  constructor(public route: Router) { }

  ngOnInit() {
  }

}
