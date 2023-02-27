import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public itemsList: Array<{nome: string, idade: number}> = 
  [
    {nome: "Pedro", idade: 23},
    {nome: "André", idade: 30},
    {nome: "Santos", idade: 50},
  ]

  public condition: boolean = false

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 5000)
  }

  public conditionOnClick: boolean = false
  public conditionOnClickMistake: boolean = false

  public OnClick(): void {
    if (this.conditionOnClick) {
      this.conditionOnClick = false
    } else {
      this.conditionOnClick = true
    }
  }

  public OnClickList(): void {
    this.itemsList.push({nome: "José", idade: 90})
  }
}
