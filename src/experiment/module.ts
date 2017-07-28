import {NgModule} from '@angular/core';

import {App, FooBar} from './app';
import {CustomBrowserModule} from "./customengine/modules";

@NgModule({
  imports: [CustomBrowserModule],
  declarations: [App, FooBar],
  bootstrap: [App]
})
export class AppModule {}