import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {App, FooBar} from './app';

@NgModule({
  imports: [BrowserModule],
  declarations: [App, FooBar],
  bootstrap: [App]
})
export class AppModule {}