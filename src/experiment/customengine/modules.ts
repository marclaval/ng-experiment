import {CommonModule} from '@angular/common';
import {NgModule, Testability, ErrorHandler, RendererFactory2, ApplicationRef, ApplicationInitStatus, Compiler, LOCALE_ID,
  Inject, Optional, SkipSelf,
  ɵAPP_ID_RANDOM_PROVIDER as APP_ID_RANDOM_PROVIDER
} from '@angular/core';
import {EventManager, Meta, Title, EVENT_MANAGER_PLUGINS, HAMMER_GESTURE_CONFIG, HammerGestureConfig,
  ɵDomEventsPlugin as DomEventsPlugin,
  ɵKeyEventsPlugin as KeyEventsPlugin,
  ɵHammerGesturesPlugin as HammerGesturesPlugin,
  ɵDomRendererFactory2 as DomRendererFactory2,
  ɵSharedStylesHost as SharedStylesHost,
  ɵDomSharedStylesHost as DomSharedStylesHost,
  ɵELEMENT_PROBE_PROVIDERS as ELEMENT_PROBE_PROVIDERS,
  ɵBROWSER_SANITIZATION_PROVIDERS as BROWSER_SANITIZATION_PROVIDERS
} from '@angular/platform-browser';

import {CustomApplicationRef} from './viewengine';

export function _localeFactory(locale?: string): string {
  return locale || 'en-US';
}

@NgModule({
  providers: [
    CustomApplicationRef,
    {provide: ApplicationRef, useExisting: CustomApplicationRef},
    ApplicationInitStatus,
    Compiler,
    APP_ID_RANDOM_PROVIDER,
    //{provide: IterableDiffers, useFactory: _iterableDiffersFactory},
    //{provide: KeyValueDiffers, useFactory: _keyValueDiffersFactory},
    {
      provide: LOCALE_ID,
      useFactory: _localeFactory,
      deps: [[new Inject(LOCALE_ID), new Optional(), new SkipSelf()]]
    },
  ]
})
export class CustomApplicationModule {
  // Inject ApplicationRef to make it eager...
  constructor(appRef: ApplicationRef) {}
}

export function errorHandler(): ErrorHandler {
  return new ErrorHandler();
}

@NgModule({
  providers: [
    BROWSER_SANITIZATION_PROVIDERS,
    {provide: ErrorHandler, useFactory: errorHandler, deps: []},
    {provide: EVENT_MANAGER_PLUGINS, useClass: DomEventsPlugin, multi: true},
    {provide: EVENT_MANAGER_PLUGINS, useClass: KeyEventsPlugin, multi: true},
    {provide: EVENT_MANAGER_PLUGINS, useClass: HammerGesturesPlugin, multi: true},
    {provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig},
    DomRendererFactory2,
    {provide: RendererFactory2, useExisting: DomRendererFactory2},
    {provide: SharedStylesHost, useExisting: DomSharedStylesHost},
    DomSharedStylesHost,
    Testability,
    EventManager,
    ELEMENT_PROBE_PROVIDERS,
    Meta,
    Title,
  ],
  exports: [CommonModule, CustomApplicationModule]
})
export class CustomBrowserModule {}