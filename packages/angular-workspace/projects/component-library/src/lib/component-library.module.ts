import {APP_INITIALIZER, NgModule} from '@angular/core';
import {DIRECTIVES} from './stencil-generated';
import {defineCustomElements} from 'pvr-components/loader';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class ComponentLibraryModule {
}
