import { stringify } from '@angular/compiler/src/util';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  //@Input() color: string;
  constructor(private element: ElementRef) { // yazıldığı element i constructor içine aldık kullanabilmek için

    //this.element.nativeElement.style.color = this.color;        // native element asıl HTML element, bu şekilde yapınca aşağıdaki comment durumu oluyor.
  }

  // input u yukarıda tanımlayınca angular başta ilk directive i okuyunca renk alanını görmeden oluşturuyor yani siyah kalıyor rengi mesela sonra [color] u görüyor, bunu bu şekilde önleyebiliriz. normalde @Input() set color şeklindeydi, bunun yerine input aliasing özelliği kullanarak inputun içinde tanımladık böylece elementte directive kullanırken direk [appCustom] yapabiliyoruz, bunun yerine -> appCustom [color]
  @Input('appCustom') set color(colorNew: string){
    this.element.nativeElement.style.color = colorNew;
  }
  /*
  bu şekilde ngClass yerine de kullanılabilir
  @Input('appCustom') set classNames(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key);
      }
      else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
  */



}
