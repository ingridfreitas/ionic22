import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-honest',
  templateUrl: './honest.page.html',
  styleUrls: ['./honest.page.scss'],
})
export class HonestPage implements OnInit {

  vdd = 0;
  luk = 0;

  serio(){
    this.vdd++
  }

  falso(){
    this.luk++;
    console.log(this.luk)
  }

  resultado(){
    var h = document.querySelector(".h")
    h.textContent = this.vdd.toString()

    var d = document.querySelector(".d")
    d.textContent = this.vdd.toString()

    var magic = document.querySelector(".magic")
    var magic1 = document.querySelector(".magic1")
    magic.classList.remove("drax")
    magic1.classList.remove("drax")
  }

  info(){
    var carinfo = document.querySelector(".infos")
    carinfo.classList.remove("drax")
  }

  rota(){
    this.route.navigateByUrl('/chat')
  }
  constructor(public route: Router) { }

  ngOnInit() {
  }

}
