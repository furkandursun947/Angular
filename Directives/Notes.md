## ngClass, kullanışlar

[ngClass] = "{active: i === currentPage}" 

-----------------

[ngClass] = " 'active' "

-----------------

[ngClass] = "getClass()"

getClass(){
  if...
    return 'active';
}

or..

getClass(){
  const Classes = [];

  if...
    classes.push('active');
  
  if...
    classes.push('primary');
  .
  .
  .

  return classes;   (ngClass, array alıp yönetebiliyor otomatik olarak)
}

-----------------

## multi directive

bir html elementinde normalde 2 directive birden kullanamazsın mesela ngıf altına da ngfor şeklinde olmaz hata verir;
bunun çözümü ng-container dir.

## communicate

--from parent to child component..

parent component template;
<app-card [title]=" 'SnowyMountains' "></app-card>

child component class;
import {input} from ..

class .. {
  @Input() title: string;
}

--from directive 

pretty much same thing, we use input decorator


## ngFor un yerine yazdığımız structural directive

*appTimes="images.length; let i = index"


