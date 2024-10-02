import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [],
  template: `
    <canvas #refCanvas></canvas>
    <canvas #refCanvas></canvas>
    <button (click)="drawRectangle()">Dessiner rectangle</button>
  `
})
export class DrawComponent {
 // @ViewChild('refCanvas') propCanvas!: ElementRef<HTMLCanvasElement>
 @ViewChildren('refCanvas') propCanvas!: QueryList<ElementRef<HTMLCanvasElement>>
  private context!: CanvasRenderingContext2D | null

  /*ngAfterViewInit(): void {
    this.context = this.propCanvas.nativeElement.getContext('2d')
  }*/

  drawRectangle() {
   const arrayCanvas = this.propCanvas.toArray()
   for (let canvas of arrayCanvas) {
    const context = canvas.nativeElement.getContext('2d')
    if (!context) return
    context.fillStyle = 'blue'
    context.fillRect(0, 0, 100, 100)
   }
  }
}
