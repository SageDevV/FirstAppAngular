import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public componenteShowed: boolean = true

  public Destruir(): void {
    this.componenteShowed = false
  }

  ngOnInit(): void {
    console.log('Componente app inicializando')
  }

}
