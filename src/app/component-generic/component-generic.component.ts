import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-generic',
  templateUrl: './component-generic.component.html',
  styleUrls: ['./component-generic.component.css']
})
export class ComponentGenericComponent implements OnInit {

  public descricao: string | undefined

  constructor() {

  }

  ngOnInit(): void {
    this.descricao = "Descricao Genérica"
  }

}
