import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-test',
  templateUrl: './interpolation-test.component.html',
  styleUrls: ['./interpolation-test.component.css']
})
export class InterpolationTestComponent {

  public nome: string = 'Pedro'
  public idade: number = 23
  public kms: string = '20km'
  public parametroIdade: number = 18
  public buttonName: string = "Button"

  public buttonCheck: boolean = false


  public position: { x: number, y: number } = { x: 0, y: 0 }

  public Notify(): void {
    alert('Estou lhe notificando via Event Binding')
  }

  public CapturarPosicaoMouse(event: MouseEvent): void {
    console.log(event)
    this.position.x = event.offsetX
    this.position.y = event.offsetY
  }
  
}
