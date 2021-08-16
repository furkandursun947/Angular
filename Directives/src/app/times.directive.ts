import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private ViewContainer: ViewContainerRef,  // directiv i kullandığımız element, elementref den farkı bu reference ediyor o elementi yani daha flexible oluyoruz kullanış olarak, yapılabilecek şeyler artıyor.
    private templateRef: TemplateRef<any> // directivi apply ettiğimiz elementin içindeki şey ul a directive yazarsak içinde li template ref ile temsil edilir
  ) { }

  @Input('appTimes') set render(times: number) {
    this.ViewContainer.clear(); //içindeki elementleri siler

    for(let i=0; i<times; i++){ // elementleri ekler sıfırdan
      this.ViewContainer.createEmbeddedView(this.templateRef, {
        index:i // ngFor un index tutması gibi, başka şeylerde yazabilrsin buraya
      });
    }
  }
}
