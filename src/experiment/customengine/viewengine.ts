import {ApplicationRef, ComponentRef, ViewRef, ComponentFactory, Type} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

export class CustomApplicationRef extends ApplicationRef {

  bootstrap<C>(componentFactory: ComponentFactory<C> | Type<C>, rootSelectorOrNode?: string | any): ComponentRef<C> {
    console.log('ApplicationRef.bootstrap()');
    return null;
  }

  tick(): void {
    console.log('ApplicationRef.attachView()');
  }

  attachView(view: ViewRef): void {
    console.log('ApplicationRef.tick()');
  }

  detachView(view: ViewRef): void {
    console.log('ApplicationRef.detachView()');
  }

  get componentTypes(): Type<any>[] {
    return [];
  }
  get components(): ComponentRef<any>[] {
    return [];
  }
  get viewCount(): number {
    return 0;
  }
  get isStable(): Observable<boolean> {
    return of(true);
  }

}