import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Bem vindo"

  constructor() {

  }
  
  ngOnInit(): void {
    console.log('Inicializando componente title.')
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnDestroy(): void {
    console.log('Destruindo o componente title.')
  }

}
